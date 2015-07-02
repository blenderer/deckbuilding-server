var Random = require('random-js');
var Board = require('./Board.js');

var Game = function (players, deck) {

    this.players = players;
    this.board = new Board(deck, this.players);
}

Game.prototype.setup = function() {

}

module.exports = Game;
