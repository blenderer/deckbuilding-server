var DeckBuilder = require('./DeckBuilder.js');
var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');
var PlayerArea = require('./PlayerArea.js');

var Board = function (deck, players) {
  var self = this;

    this.lineup = new CardGroup([]);
    this.purchaseDeck = new CardStack(deck);

    this.playerAreas = {};

    var db = new DeckBuilder();

    players.forEach(function(player) {
      var starterDeck = db.createDeck(["starter"]);
      self.playerAreas[player.id] = new PlayerArea(starterDeck);
    });

    console.log(this.playerAreas);

    this.replenish();
}

Board.prototype.start = function() {

}

Board.prototype.replenish = function() {
    while (this.lineup.cards.length < 5 && this.purchaseDeck.cards.length > 0) {
        this.lineup.add(this.purchaseDeck.takeTopCard());
    }
}

module.exports = Board;
