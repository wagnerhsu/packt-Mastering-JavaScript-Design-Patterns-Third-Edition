import { ATM, Currency } from './js/ChainOfResponsibility'

const atm = new ATM();

atm.dispense(new Currency(160, '€'));
