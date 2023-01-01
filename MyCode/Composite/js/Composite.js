class MenuComponent {
  constructor(name = '', description = '', isVegetarian = false, price = 0) {
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

  print() {
    shouldBeOverwritten();
  }

  add() {
    shouldBeOverwritten();
  }

  remove() {
    shouldBeOverwritten();
  }

  getChild() {
    shouldBeOverwritten();
  }
}

class Menu extends MenuComponent {
  constructor(name, description) {
    super();
    this.menuComponents = [];
    this.name = name;
    this.description = description;
    this.createIterator = function() {
      throw new Error('This method must be overwritten!');
    }
  }

  add(menuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent) {
    this.menuComponents = this.menuComponents.filter(component => {
      return component !== component;
    });
  }

  getChild(index) {
    return this.menuComponents[index];
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  print() {
    console.log(this.getName() + ": " + this.getDescription());
    console.log("--------------------------------------------");
    this.menuComponents.forEach(component => {
      component.print();
    });
  }
}

class MenuItem extends MenuComponent {
  print() {
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
  }
}

class CafeMenu extends Menu {}

class LunchMenu extends Menu {}

class PancakeHouseMenu extends Menu {}

class Mattress {
  constructor(aMenus) {
    this.menus = aMenus;
  }

  printMenu() {
    this.menus.print();
  }
}

export { Menu, MenuItem, Mattress }
