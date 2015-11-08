var Card = function (cardJSON) {
    this.name = cardJSON.name;
    this.cardText = cardJSON.cardText;
    this.cost = cardJSON.cost;
    this.benefit = cardJSON.benefit;
    this.image = cardJSON.image;
}

Card.prototype.getCost = function() {
  var resource = {
    power: 0,
    valor: 0,
    gold: 0
  }
  var powerExpression = /(\d+)p/i;
  var valorExpression = /(\d+)v/i;
  var goldExpression = /(\d+)v/i;

  if (match = this.cost.match(powerExpression)) {
    resource.power = match[1]*1;
  }

  if (match = this.cost.match(valorExpression)) {
    resource.valor = match[1]*1;
  }

  if (match = this.cost.match(goldExpression)) {
    resource.gold = match[1]*1;
  }

  return resource;
}

Card.prototype.getBenefit = function() {
  var resource = {
    power: 0,
    valor: 0,
    gold: 0
  }
  var powerExpression = /(\d+)p/i;
  var valorExpression = /(\d+)v/i;
  var goldExpression = /(\d+)v/i;
  
  if (match = this.benefit.match(powerExpression)) {
    resource.power = match[1]*1;
  }

  if (match = this.benefit.match(valorExpression)) {
    resource.valor = match[1]*1;
  }

  if (match = this.benefit.match(goldExpression)) {
    resource.gold = match[1]*1;
  }

  return resource;
}

module.exports = Card;
