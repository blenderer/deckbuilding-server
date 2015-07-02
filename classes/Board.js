var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');
var Player = require('./Player.js');

var Board = function (deck) {

    this.lineup = new CardGroup([]);
    this.purchaseDeck = new CardStack(deck);

    this.replenish();

    console.log(this.lineup);
}

Board.prototype.start = function() {
    
}

Board.prototype.replenish = function() {
    while (this.lineup.cards.length < 5 && this.purchaseDeck.cards.length > 0) {
        this.lineup.add(this.purchaseDeck.takeTopCard());
    }
}

module.exports = Board;