var crypto = require('crypto');

var Lobby = function (name, deckStrings, turnLimit, firstPlayer) {

    this.name = name;
    this.deckStrings = deckStrings;
    this.turnLimit = turnLimit;
    this.players = [firstPlayer];
    this.id = crypto.randomBytes(20).toString('hex');
}

Lobby.prototype.getId = function() {
    return this.id;
}

module.exports = Lobby;