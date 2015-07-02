var DeckBuilder = require('./DeckBuilder.js');
var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');
var PlayerArea = require('./PlayerArea.js');
var random = require("random-js")();
var _ = require('lodash');

var Board = function (deck, players) {
  var self = this;

    this.lineup = new CardGroup([]);
    this.purchaseDeck = new CardStack(deck);

    this.playerAreas = [];

    var db = new DeckBuilder();

    players.forEach(function(player) {
      var starterDeck = db.createDeck(["starter"]);

      var newPlayerArea = new PlayerArea(starterDeck, player, self);

      self.playerAreas.push(newPlayerArea);
    });
}

Board.prototype.start = function() {
  // flip a coin, winner goes first
  var turnCoin = random.integer(0, this.playerAreas.length - 1);
  this.playerAreas[turnCoin].turn = true;

  //draw cards for each player
  this.playerAreas.forEach(function(pA) {
    pA.deck.shuffle();
    pA.draw(5);
  });

  this.replenish();
}

Board.prototype.getPlayerAreaWithTurn = function() {
  return _.find(this.playerAreas, {turn: true});
}

Board.prototype.nextTurn = function() {
  var currentIndex = _.findIndex(this.playerAreas, {turn: true});
  this.playerAreas[currentIndex].endTurn();

  if (currentIndex === this.playerAreas.length - 1) {
    this.playerAreas[0].startTurn();
  }
  else {
    this.playerAreas[currentIndex + 1].startTurn();
  }
}

Board.prototype.replenish = function() {
    while (this.lineup.cards.length < 5 && this.purchaseDeck.cards.length > 0) {
        this.lineup.add(this.purchaseDeck.takeTopCard());
    }
}

Board.prototype.getCardGroupSizes = function() {
  var playerAreasCardGroupSizes = {};

  this.playerAreas.forEach(function(pA) {
    playerAreasCardGroupSizes[pA.playerName] = pA.getCardGroupSizes();
  });

  return {
    "lineup": this.lineup.cards.length,
    "purchaseDeck": this.purchaseDeck.cards.length,
    "players": playerAreasCardGroupSizes
  };
}

module.exports = Board;
