var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');

var PlayerArea = function (deck) {
    //this.name = name;
    this.deck = deck;
    //this.ip = ip;

    this.hand = new CardGroup([]);
    this.discardPile = new CardStack([]);
    this.permanents = new CardGroup([]);

    this.resources = {
        power: 0,
        valor: 0,
        gold: 0
    }
}

PlayerArea.prototype.newTurn = function() {
    // reset the resources to zero
    this.resources.forEach(function(resource) {
        resource = 0;
    });

    // draw 5 cards
    this.draw(5);
}

PlayerArea.prototype.purchase = function(card) {
    this.add(card);
}

PlayerArea.prototype.benefit = function(card) {
        this.resources.power += card.resources.power;
}

PlayerArea.prototype.useCardInHand = function(index) {
    // remove a card
    var removedCard = this.hand.remove(index)

    // Add to discard Pile
    this.discardPile.add(removedCard);
}

PlayerArea.prototype.draw = function(drawQuantity) {
    var drawsLeft = drawQuantity;

    var nextCard = this.deck.takeTopCard();

    if (!nextCard) {
        this.replenishDeck(drawQuantity);
        return false;
    }

    this.hand.add(nextCard);

    if (--drawQuantity > 0) {
        this.draw(drawQuantity);
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

module.exports = PlayerArea;
