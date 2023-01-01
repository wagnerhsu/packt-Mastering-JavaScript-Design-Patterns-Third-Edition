class Visitable {
  accept(visitor) {
    throw new Error('This method should be overwritten');
  }
}

const privateBookPrice = new WeakMap();
const privateBookWeight = new WeakMap();
class Book extends Visitable {
  constructor(price = 0, weight = 0) {
    super();
    privateBookPrice.set(this, price);
    privateBookWeight.set(this, weight);
  }
  get price() {
    return privateBookPrice.get(this);
  }
  get weight() {
    return privateBookWeight.get(this);
  }
  accept(visitor) {
    visitor.visit(this);
  }
}

class Visitor {
  visit(item) {
    throw new Error('This method should be overwritten');
  }
}

class PostageVisitor extends Visitor {
  constructor(totalPostageForCart = 0) {
    super();
    this.totalPostageForCart = totalPostageForCart;
  }
  visit(item) {
    if (item.price <= 10) {
      this.totalPostageForCart += item.weight * 2;
    }
  }
  get totalPostage() {
    return this.totalPostageForCart;
  }
}

const privateCartItems = new WeakMap();

class ShoppingCart {
  constructor() {
    privateCartItems.set(this, []);
  }
  get items() {
    return privateCartItems.get(this);
  }
  addItem(item) {
    const items = this.items;
    items.push(item);
    privateCartItems.set(this, items);
  }
  calculateTotalPrice() {
    const amountCart = this.calculateAmountCart();
    const amountPostage = this.calculatePostage();
    return amountCart + amountPostage;
  }
  calculateAmountCart() {
    return this.items.reduce((reducer, item) => {
      return (reducer += item.price);
    }, 0);
  }
  calculatePostage() {
    const visitor = new PostageVisitor();
    this.items.forEach((item) => {
      item.accept(visitor);
    });
    return visitor.totalPostage;
  }
}
export { ShoppingCart, Book };
