var CardGroup = require('./CardGroup.js');
var shuffle = require('shuffle-array');

var CardStack = function (cardArray) {
    CardGroup.apply(this, arguments);
}

CardStack.prototype = new CardGroup();
CardStack.prototype.constructor = CardStack;

CardStack.prototype.takeTopCard = function(cardsToTake) {
    if (this.cards.length < 1) {
        return false;
    }

    return this.cards.pop();
};

CardStack.prototype.shuffle = function() {
    shuffle(this.cards);
}


module.exports = CardStack;