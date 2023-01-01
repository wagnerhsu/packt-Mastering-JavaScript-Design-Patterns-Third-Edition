import { MallardDuck, WildTurkey, TurkeyAdapter } from './js/Adapter'

let oMallardDuck = new MallardDuck();
let oWildTurkey = new WildTurkey();
let oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

oMallardDuck.fly();
oMallardDuck.quack();

oWildTurkey.fly();
oWildTurkey.gobble();

oTurkeyAdapter.fly();
oTurkeyAdapter.quack();
