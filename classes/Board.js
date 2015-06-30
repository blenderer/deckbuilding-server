var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');
var Player = require('./Player.js');

var Board = function (deck) {

    this.lineup = new CardGroup([]);
    this.purchaseDeck = new CardStack([]);
}

Board.prototype.start = function() {
    
    this.replenish();
}

Board.prototype.replenish = function() {
    while (this.lineup.cards.length < 5 && this.purchaseDeck.cards.length > 0) {
        this.lineup.add(this.purchaseDeck.takeTopCard());
    }
}

module.exports = Board;