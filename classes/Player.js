var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');

var Player = function (name, deck) {
    this.name = name;
    this.deck = deck;

    this.hand = new CardGroup([]);
    this.discardPile = new CardStack([]);
    this.permanents = new CardGroup([]);
}

Player.prototype.draw = function(drawQuantity) {
    for (var i=0; i<drawQuantity; i++) {
        this.hand.add(this.deck.takeTopCard());
    }
}

Player.prototype.takeFirstTurn = function() {
    this.draw(5);
}

module.exports = Player;