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

var p1 = new Player('Eric Harrison', deck);

p1.deck.shuffle();

p1.draw(5);

p1.useCardInHand(4);
p1.useCardInHand(3);
p1.useCardInHand(2);
p1.useCardInHand(1);
p1.useCardInHand(0);

console.log(p1.deck.cards.length);

p1.draw(5);

p1.useCardInHand(4);
p1.useCardInHand(3);
p1.useCardInHand(2);
p1.useCardInHand(1);
p1.useCardInHand(0);

console.log(p1.discardPile.cards.length);