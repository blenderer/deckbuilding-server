var Card = function (cardJSON) {
    this.name = cardJSON.name;
    this.cardText = cardJSON.cardText;
    this.cost = cardJSON.cost;
    this.benefit = cardJSON.benefit;
    this.image = cardJSON.image;
}

module.exports = Card;