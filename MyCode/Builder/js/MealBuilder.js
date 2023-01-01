import Meal from './Meal'
import VeganBurger from './VeganBurger';
import Water from './Water';
import Salad from './Salad';
import BeefBurger from './BeefBurger';
import Coke from './Coke';
import Fries from './Fries';
import KobeBurger from './KobeBurger';
import Champagne from './Champagne';
import Crudettes from './Crudettes';

class MealBuilder {
  prepareVeganMeal() {
    var meal = new Meal();
    meal.addItem(new VeganBurger());
    meal.addItem(new Water());
    meal.addItem(new Salad());
    return meal;
  }
  prepareNonVeganMeal() {
    var meal = new Meal();
    meal.addItem(new BeefBurger());
    meal.addItem(new Coke());
    meal.addItem(new Fries());
    return meal;
  }
  prepareDeluxeMeal() {
    var meal = new Meal();
    meal.addItem(new KobeBurger());
    meal.addItem(new Champagne());
    meal.addItem(new Crudettes());
    return meal;
  }
}

export default MealBuilder;
