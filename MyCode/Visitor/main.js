import { ShoppingCart, Book } from './js/Visitor';

var oShoppingCart = new ShoppingCart();

oShoppingCart.addItem(new Book(7.95, 0.4));
oShoppingCart.addItem(new Book(3.75, 0.16));

console.log('Amount to be paid for all the items in the cart: ' + oShoppingCart.calculateAmountCart());
console.log('Amount to be paid for shipping costs: ' + oShoppingCart.calculatePostage());
console.log(
  'Amount to be paid for all the items in the cart plus shipping costs:' + oShoppingCart.calculateTotalPrice()
);
