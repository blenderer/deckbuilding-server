var _ = require('lodash');
var Game = require('./Game.js');
var DeckBuilder = require('./DeckBuilder.js');

var Server = function () {

    this.games = [];
    this.lobbies = [];
}

Server.prototype.startGame = function(lobbyId) {

    var lobby = _.find(this.lobbies, {"id": lobbyId});

    var db = new DeckBuilder();
    var deck = db.createDeck(lobby.deckStrings);

    var game = new Game(lobby.players, deck);

}

Server.prototype.addLobby = function(lobby) {
    this.lobbies.push(lobby);
}

module.exports = Server;