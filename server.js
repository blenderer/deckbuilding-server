var Card = require('./classes/Card.js');
var CardGroup = require('./classes/CardGroup.js');
var CardStack = require('./classes/CardStack.js');
var Player = require('./classes/Player.js');

var dataCard = {
    name: "Eric Harrison",
    cardText: "Best card ever!",
    cost: "0p",
    benefit: "1d + 2v",
    image: null
}

var dataCard2 = {
    name: "zzzzzzz",
    cardText: "eagear",
    cost: "0p",
    benefit: "1d + 2v",
    image: null
}

var cards = [];

cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard2));
cards.push(new Card(dataCard2));
cards.push(new Card(dataCard2));

var deck = new CardStack(cards);


cards = [];

cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard));
cards.push(new Card(dataCard2));
cards.push(new Card(dataCard2));
cards.push(new Card(dataCard2));

var deck2 = new CardStack(cards);

var purchaseDeck = new CardStack(cards);
purchaseDeck.shuffle();

var p1 = new Player('Eric Harrison', deck);
var p2 = new Player('Watson', deck2);

console.log(p1.deck.cards.length, purchaseDeck.cards.length);
p1.deck.add(purchaseDeck.takeTopCard());
console.log(p1.deck.cards.length, purchaseDeck.cards.length);


