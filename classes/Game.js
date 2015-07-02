var Board = require('./Board.js');

var Game = function (players, deck) {
    
    this.players = players;
    this.board = new Board(deck);
}

Game.prototype.setup = function() {

}

module.exports = Game;