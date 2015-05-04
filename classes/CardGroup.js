var CardGroup = function (cardArray) {
    this.cards = cardArray;
}

CardGroup.prototype.remove = function(index) {
    var removedCard = this.cards[index];

    this.cards.splice(index, 1);
    return removedCard;
}

CardGroup.prototype.add = function(aCard) {
    this.cards.push(aCard);
}

module.exports = CardGroup;