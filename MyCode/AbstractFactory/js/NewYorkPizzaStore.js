class PizzaIngredientFactory {
  createDough() {
    throw new Error('This method must be overwritten!');
  }

  createSauce() {
    throw new Error('This method must be overwritten!');
  }

  createCheese() {
    throw new Error('This method must be overwritten!');
  }

  createVeggies() {
    throw new Error('This method must be overwritten!');
  }

  createPepperoni() {
    throw new Error('This method must be overwritten!');
  }

  createClam() {
    throw new Error('This method must be overwritten!');
  }
}

class PizzaStore {
  createPizza() {
    throw new Error('This method must be overwritten!');
  }

  orderPizza(type) {
    let pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

class Pizza {
  constructor({ name = '', dough = null, sauce = null, veggies = [], cheese = null, pepperoni = null, clams = null }) {
    this.name = name;
    this.dough = dough;
    this.sauce = sauce;
    this.veggies = veggies;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.clams = clams;
  }

  prepare() {
    throw new Error('This method must be overwritten!');
  }

  bake() {
    console.log('Bake for 25 minutes at 350');
  }

  cut() {
    console.log('Cutting the pizza into diagonal slices');
  }

  box() {
    console.log('Place pizza in official PizzaStore box');
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class ThinCrustDough {}

class MarinaraSauce {}

class ReggianoCheese {}

class Garlic {}

class Mushroom {}

class RedPepper {}

class NewYorkPizzaIngredientFactory extends PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies() {
    return [new Garlic(), new Mushroom(), new RedPepper()];
  }

  createPepperoni() {}

  createClam() {}
}

class CheesePizza extends Pizza {
  constructor(style, ingredientFactory) {
    super({
      name: style + ' Cheese Pizza',
    });
    console.log(this.name);
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    let ingredientFactory = this.ingredientFactory;
    console.log('Preparing ' + this.name);
    this.dough = ingredientFactory.createDough();
    this.sauce = ingredientFactory.createSauce();
    this.cheese = ingredientFactory.createCheese();
  }
}

class ClamPizza extends Pizza {
  constructor(style, ingredientFactory) {
    super({
      name: style + ' Clams Pizza',
    });
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    let ingredientFactory = this.ingredientFactory;
    console.log('Preparing ' + this.name);
    this.dough = ingredientFactory.createDough();
    this.sauce = ingredientFactory.createSauce();
    this.cheese = ingredientFactory.createCheese();
    this.clams = ingredientFactory.createClam();
  }
}

const PIZZAS = {
  cheese: CheesePizza,
  clam: ClamPizza,
};

class NewYorkPizzaStore extends PizzaStore {
  createPizza(type) {
    let ingredientFactory = new NewYorkPizzaIngredientFactory();
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor('New York Style', ingredientFactory);
    }
    return pizza;
  }
}

export default NewYorkPizzaStore;
