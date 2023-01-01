class Iterator {
  constructor(items) {
    if (typeof items[Symbol.iterator] !== 'function') {
      const keys = Object.keys(items);
      items[Symbol.iterator] = () => {
        return {
          next: () => {
            return { value: items[keys.shift()], done: keys.length === 0 };
          },
        };
      };
    }
    return items[Symbol.iterator]();
  }
}

class MenuItem {
  constructor({ name = '', description = '', isVegetarian = false, price = 0 }) {
    this.name = name;
    this.description = description;
    this._isVegetarian = isVegetarian;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  isVegetarian() {
    return this._isVegetarian;
  }
}

class Menu {
  constructor() {
    this.menuItems = [];
    this.length = 0;
  }

  addItem(menuItem) {
    this.menuItems.push(menuItem);
    this.length = this.menuItems.length;
  }

  getMenuItems() {
    return this.menuItems.concat([]);
  }
}

const MAX_ITEMS = 6;

class LunchMenu extends Menu {
  constructor() {
    super();
    this.addItem('Vegetarian BLT', "(Fakin') Bacon with lettuce and tomato on whole wheat", true, 2.99);
    this.addItem('BLT', 'Bacon with lettuce and tomato on whole wheat', false, 2.99);
    this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
    this.addItem('Hotdog', 'A hotdog with saurkraut, relish, onions, topped with cheese', false, 3.05);
  }

  addItem(name, description, isVegetarian, price) {
    if (this.length === MAX_ITEMS) {
      throw new Error("Sorry menu is full! Can't add item to menu");
    }
    super.addItem(
      new MenuItem({
        name: name,
        description: description,
        isVegetarian: isVegetarian,
        price: price,
      })
    );
  }
}

class Mattress {
  constructor() {
    this.lunchItems = new LunchMenu().getMenuItems();
  }

  printMenu() {
    var iterator = new Iterator(this.lunchItems);
    var item = iterator.next();
    var value;
    while (!item.done) {
      value = item.value;
      console.log(value.getName() + ': ' + value.getDescription() + ', ' + value.getPrice() + 'eur.');
      item = iterator.next();
    }
  }
}

export { Mattress };
