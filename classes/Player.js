var crypto = require('crypto');

var Player = function (name, ip) {
    this.name = name;
    this.ip = ip;

    this.id = crypto.randomBytes(20).toString('hex');
}

module.exports = Player;
