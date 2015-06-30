var _ = require('lodash');
var Game = require('./Game.js');

var Server = function () {

    this.games = [];
    this.lobbies = [];
}

Server.prototype.startGame = function(lobbyId) {

    var lobby = _.find(this.lobbies, {"id": lobbyId});

    var game = new Game(lobby.players, []);

    console.log(game);
}

Server.prototype.addLobby = function(lobby) {
    this.lobbies.push(lobby);
}

module.exports = Server;