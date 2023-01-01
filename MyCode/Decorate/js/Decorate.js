class Beverage {
  constructor(description = 'Unknown beverage') {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  cost() {
    throw new Error('This method must be overwritten!');
  }
}

class CondimentDecorator extends Beverage {}

class Espresso extends Beverage {
  cost() {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  cost() {
    return 0.89;
  }
}

class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost() {
    return 0.2 + this.beverage.cost();
  }
}

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  cost() {
    return 0.6 + this.beverage.cost();
  }
}

export { Espresso, Mocha, Whip }
