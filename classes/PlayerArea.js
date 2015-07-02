var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');
var _ = require('lodash');

var PlayerArea = function (deck, player, board) {
    this.player = player;
    this.playerName = player.name;

    this.deck = new CardStack(deck);
    //this.ip = ip;

    this.hand = new CardGroup([]);
    this.discardPile = new CardStack([]);

    this.stagingArea = new CardGroup([]);
    this.permanents = new CardGroup([]);

    this.playingACard = false;

    this.turn = false;

    this.resources = {
        power: 0,
        valor: 0,
        gold: 0
    }
    this.board = board;
}

PlayerArea.prototype.logAction = function(actor, action, subject, initiatorSubject) {
  var text = actor + " " + action;

  if (subject) {
    text += ": " + subject;

    if (initiatorSubject) {
      text += " with " + initiatorSubject;
    }
  }

  console.log(text);
}

PlayerArea.prototype.receiveOption = function(type, choice) {
  if (type === "play") {
    this.useCardInHand(choice);
  }
  else if (type === "purchase") {
    this.purchase(choice);
  }
  else if (type === "pass") {
    this.board.nextTurn();
  }
}

PlayerArea.prototype.playRest = function() {
  while (this.hand.cards.length > 0) {
    this.useCardInHand(0);
  }
}

PlayerArea.prototype.addStagedToDiscard = function() {
  while (this.stagingArea.cards.length > 0) {
    var addMeToDiscardPile = this.stagingArea.remove(0);
    this.discardPile.add(addMeToDiscardPile);
  }
}

PlayerArea.prototype.startTurn = function() {
    this.turn = true;
    this.logAction(this.playerName, "started his turn");
}

PlayerArea.prototype.endTurn = function() {
  this.playRest();
  this.addStagedToDiscard();

  // reset the resources to zero
  _.each(this.resources, function(resource) {
      resource = 0;
  });

  this.turn = false;

  this.logAction(this.playerName, "ended his turn");

  this.draw(5);
}

PlayerArea.prototype.purchase = function(index) {
    var purchasedCard = this.board.lineup.remove(index);

    this.discardPile.add(purchasedCard);
    this.logAction(this.playerName, "purchased card", purchasedCard.name);
}

PlayerArea.prototype.benefit = function(card) {
        this.resources.power += card.resources.power;
}

PlayerArea.prototype.useCardInHand = function(index) {
    // remove a card
    var removedCard = this.hand.remove(index)

    // Add to staging Pile
    this.stagingArea.add(removedCard);
    this.logAction(this.playerName, "played card", removedCard.name);
}

PlayerArea.prototype.draw = function(drawQuantity) {

    var drawsLeft = drawQuantity;

    var nextCard = this.deck.takeTopCard();

    if (!nextCard) {
        this.replenishDeck(drawsLeft);
        return false;
    }

    this.hand.add(nextCard);
    this.logAction(this.playerName, "drew card", nextCard.name);

    if (--drawsLeft > 0) {
        this.draw(drawsLeft);
    }
}

PlayerArea.prototype.replenishDeck = function(cardsRemainingToDraw) {
    // assign a copy of the variable, because it will change
    var discardPileLength = this.discardPile.cards.length;

    if (discardPileLength < 1) {
        return false;
    }

    for (var i=0; i<discardPileLength; i++) {
        this.deck.cards.push(this.discardPile.cards.pop());
    }

    this.discardPile.shuffle();
    this.draw(cardsRemainingToDraw);
}

PlayerArea.prototype.getCardGroupSizes = function() {
  return {
    "deck": this.deck.cards.length,
    "hand": this.hand.cards.length,
    "stagingArea": this.stagingArea.cards.length,
    "discardPile": this.discardPile.cards.length,
    "permanents": this.permanents.cards.length
  };
}

module.exports = PlayerArea;
