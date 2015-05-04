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

    console.log('Used card at index: ' + index);
}

Player.prototype.draw = function(drawQuantity) {
    for (var i=0; i<drawQuantity; i++) {
        var nextCard = this.deck.takeTopCard();

        if (!nextCard) {
            this.replenishDeck();
        }

        this.hand.add(nextCard);
        console.log(this.name + ' draws a card.');
    }
}

Player.prototype.replenishDeck = function() {
    this.deck.cards.concat(this.discardPile.cards);
    this.discardPile.shuffle();

    console.log(this.name + ' replenishes the deck.');
}

module.exports = Player;