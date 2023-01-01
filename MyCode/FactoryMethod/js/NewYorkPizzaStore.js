import PizzaStore from "./PizzaStore";
import CheesePizza from "./CheesePizza";
import ClamPizza from "./ClamPizza";

const PIZZAS = {
  cheese: CheesePizza,
  clam: ClamPizza,
};
class NewYorkPizzaStore extends PizzaStore {
  createPizza(type) {
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor();
    }
    return pizza;
  }
}

export default NewYorkPizzaStore;
