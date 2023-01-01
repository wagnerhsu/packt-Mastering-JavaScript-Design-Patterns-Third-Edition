import { Espresso, Mocha, Whip } from './js/Decorate'

let oEspressoWithMochaAndWhip = new Espresso();
oEspressoWithMochaAndWhip = new Mocha(oEspressoWithMochaAndWhip);
oEspressoWithMochaAndWhip = new Whip(oEspressoWithMochaAndWhip);

console.log(oEspressoWithMochaAndWhip.cost());
