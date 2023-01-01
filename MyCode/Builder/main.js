import MealBuilder from './js/MealBuilder';
const mealBuilder = new MealBuilder();

const veganMeal = mealBuilder.prepareVeganMeal();
veganMeal.showItems();
console.log(`Vegan meal cost: $${veganMeal.getCost()}`);

const nonVeganMeal = mealBuilder.prepareNonVeganMeal();

nonVeganMeal.showItems();
console.log(`Non vegan meal cost: $${nonVeganMeal.getCost()}`);

const deluxeMeal = mealBuilder.prepareDeluxeMeal();

deluxeMeal.showItems();
console.log(`Deluxe meal cost: $${deluxeMeal.getCost()}`);
