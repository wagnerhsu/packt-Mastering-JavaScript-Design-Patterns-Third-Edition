import { MallardDuck, RedheadDuck, RubberDuck, DecoyDuck } from './js/Strategy';

const mallard = new MallardDuck();
const redhead = new RedheadDuck();
const rubber = new RubberDuck();
const decoy = new DecoyDuck();

mallard.quack();
mallard.swim();
mallard.fly();
mallard.display();

redhead.quack();
redhead.swim();
redhead.fly();
redhead.display();

rubber.quack();
rubber.swim();
rubber.display();

decoy.display();
