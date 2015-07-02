var decks = require('../data/decks.json');
var cards = require('../data/cards.json');

var Card = require('./Card.js');

var DeckBuilder = function () {
    
}

DeckBuilder.prototype.createDeck = function(deckNameArray) {
    var deck = [];

    deckNameArray.forEach(function(deckName) {
        var deckSchema = decks[deckName];

        deckSchema.forEach(function(card) {
            for (var i=0; i<card.quantity; i++) {
                deck.push(new Card(cards[card.card]));
            }
        });
    });

    return deck;
}

module.exports = DeckBuilder;