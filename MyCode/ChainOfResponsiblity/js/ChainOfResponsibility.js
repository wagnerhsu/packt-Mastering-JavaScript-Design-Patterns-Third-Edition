class Currency {
  constructor(amount, sign) {
    this.amount = amount;
    this.sign = sign;
  }
}

class DispenseChain {
  setNextChain(chainElement) {
    throw new Error('This method should be overwritten');
  }
  dispense(currency) {
    throw new Error('This method should be overwritten');
  }
}

class FiftyBillDispenser extends DispenseChain {
  setNextChain(chainElement) {
    this.chain = chainElement;
  }
  dispense(currency) {
    var amount = currency.amount;
    if (amount >= 50) {
      const billsQuantity = Math.floor(amount / 50);
      const remainder = amount % 50;
      console.log(
        'Dispensing ' + billsQuantity + ' note' + (billsQuantity > 1 ? 's' : '') + ' of 50' + currency.sign + '.'
      );
      if (remainder > 0) {
        this.chain.dispense(new Currency(remainder, currency.sign));
      }
    } else {
      this.chain.dispense(currency);
    }
  }
}

class TwentyBillDispenser extends DispenseChain {
  setNextChain(chainElement) {
    this.chain = chainElement;
  }
  dispense(currency) {
    var amount = currency.amount;
    if (amount >= 20) {
      const billsQuantity = Math.floor(amount / 20);
      const remainder = amount % 20;
      console.log(
        'Dispensing ' + billsQuantity + ' note' + (billsQuantity > 1 ? 's' : '') + ' of 20' + currency.sign + '.'
      );
      if (remainder > 0) {
        this.chain.dispense(new Currency(remainder, currency.sign));
      }
    } else {
      this.chain.dispense(currency);
    }
  }
}

class TenBillDispenser extends DispenseChain {
  setNextChain(chainElement) {
    this.chain = chainElement;
  }
  dispense(currency) {
    var amount = currency.amount;
    if (amount >= 10) {
      const billsQuantity = Math.floor(amount / 10);
      const remainder = amount % 10;
      console.log(
        'Dispensing ' + billsQuantity + ' note' + (billsQuantity > 1 ? 's' : '') + ' of 10' + currency.sign + '.'
      );
      if (remainder > 0) {
        this.chain.dispense(new Currency(remainder, currency.sign));
      }
    } else {
      this.chain.dispense(currency);
    }
  }
}

class ATM {
  constructor() {
    const B50 = new FiftyBillDispenser();
    const B20 = new TwentyBillDispenser();
    const B10 = new TenBillDispenser();

    B50.setNextChain(B20);
    B20.setNextChain(B10);

    this.chain = B50;
  }
  dispense(currency) {
    if (currency.amount % 10 !== 0) {
      throw new Error('Amount should be multiple of 10.');
    }
    this.chain.dispense(currency);
  }
}

export { ATM, Currency };
