var Board = require('./Board.js');
var choices = require('../data/choices.json');

var Game = function (id, players, deck) {

    this.id = id;
    this.players = players;
    this.board = new Board(deck, this.players);
}

Game.prototype.start = function() {
  this.board.start();
}

Game.prototype.receivePlayerOption = function(player, type, choice) {
  if (choices[type].onTurnOnly) {
    var playerAreaWithTurn = this.board.getPlayerAreaWithTurn();

    if (playerAreaWithTurn.player !== player) {
      // player is sending options when not their turn
      return false;
    }
    playerAreaWithTurn.receiveOption(type, choice);

  }
}

module.exports = Game;
