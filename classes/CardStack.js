var CardGroup = require('./CardGroup.js');

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


module.exports = CardStack;