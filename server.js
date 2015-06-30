var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;







// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said "' + data + '"');
        
    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);









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

var decks = [];


// 3 decks, 1 for each player, one purchase deck
for (var i=0; i<3; i++) {
    var cards = [];

    // Add the starter cards to deck
    for (var j=0; j<7; j++) {
        cards.push(new Card(dataCard));
    }

    // Add fodder cards to deck
    for (var j=0; j<3; j++) {
        cards.push(new Card(dataCard2));
    }

    decks.push(new CardStack(cards));
}

var purchaseDeck = decks[2];


purchaseDeck.shuffle();

var p1 = new Player('Eric Harrison', decks[0]);
var p2 = new Player('Watson', decks[1]);

p1.deck.add(purchaseDeck.takeTopCard());


