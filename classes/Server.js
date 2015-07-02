var _ = require('lodash');
var Game = require('./Game.js');
var DeckBuilder = require('./DeckBuilder.js');
var choices = require('../data/choices.json');

var Server = function () {

    this.games = [];
    this.lobbies = [];
}

Server.prototype.startGame = function(lobby) {

    var db = new DeckBuilder();
    var deck = db.createDeck(lobby.deckStrings);

    var game = new Game(lobby.id, lobby.players, deck);
    this.games.push(game);

    game.start();

    return game;
}

Server.prototype.addLobby = function(lobby) {
    this.lobbies.push(lobby);
}

Server.prototype.receivePlayerOption = function(gameId, playerId, type, choice) {
  if (gameId && choices[type].inGame) {
    var game = _.find(this.games, {id: gameId});
    var player = _.find(game.players, {id: playerId});

    game.receivePlayerOption(player, type, choice);
  }

}

module.exports = Server;
