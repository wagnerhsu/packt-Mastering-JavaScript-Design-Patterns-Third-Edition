const Quackable = (Sup = Object.constructor) =>
  class extends Sup {
    quack() {
      console.log('Quack!');
    }
  };

const Flyable = (Sup = Object.constructor) =>
  class extends Sup {
    fly() {
      console.log('Wings!');
    }
  };

class Duck {
  swim() {
    console.log('Chop!');
  }
  display() {
    throw new Error('This method must be overwritten!');
  }
}

class MallardDuck extends Quackable(Flyable(Duck)) {
  display() {
    console.log('MallardDuck show');
  }
  fly() {
    console.log('Fly 100 miles');
  }
}

class RedheadDuck extends Quackable(Flyable(Duck)) {
  display() {
    console.log('RedheadDuck show');
  }
  fly() {
    console.log('Fly 30 miles');
  }
}

class RubberDuck extends Quackable(Duck) {
  display() {
    console.log('RubberDuck show');
  }
  quack() {
    console.log('Iiiiaaa!');
  }
}

class DecoyDuck extends Duck {
  display() {
    console.log('DecoyDuck show');
  }
}

export { MallardDuck, RedheadDuck, RubberDuck, DecoyDuck };
