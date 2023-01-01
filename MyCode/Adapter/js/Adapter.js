class Duck {
  constructor() {}

  fly() {
    throw new Error('This method must be overwritten!');
  }

  quack() {
    throw new Error('This method must be overwritten!');
  }
}

class MallardDuck extends Duck {
  fly() {
    console.log('Can fly long distances!');
  }

  quack() {
    console.log('Quack! Quack!');
  }
}

class Turkey {
  fly() {
    throw new Error('This method must be overwritten!');
  }

  gobble() {
    throw new Error('This method must be overwritten');
  }
}

class WildTurkey extends Turkey {
  fly() {
    console.log('Fly short distance!');
  }

  gobble() {
    console.log('Gobble!, Gobble!');
  }
}

const MAX_FLIES = 5;

class TurkeyAdapter extends Duck {
  constructor(oTurkey) {
    super(oTurkey);
    this.oTurkey = oTurkey;
  }

  fly() {
    for (let index = 0; index < MAX_FLIES; index++) {
      this.oTurkey.fly();
    }
  }

  quack() {
    this.oTurkey.gobble();
  }
}

export { MallardDuck, WildTurkey, TurkeyAdapter };
