var CardGroup = require('./CardGroup.js');
var CardStack = require('./CardStack.js');

var Player = function (name, deck) {
    this.name = name;
    this.deck = deck;

    this.hand = new CardGroup([]);
    this.discardPile = new CardStack([]);
    this.permanents = new CardGroup([]);
}

Player.prototype.useCardInHand = function(index) {
    // remove a card
    var removedCard = this.hand.remove(index)

    // Add to discard Pile
    this.discardPile.add(removedCard);
}

Player.prototype.draw = function(drawQuantity) {
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

Player.prototype.replenishDeck = function(cardsRemainingToDraw) {
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

module.exports = Player;