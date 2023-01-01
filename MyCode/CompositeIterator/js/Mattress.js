class MenuComponent {
  constructor(name, description, isVegetarian, price) {
    this.name = name;
    this.description = description;
    this._isVegetarian = isVegetarian;
    this.price = price;
  }

  isVegetarian() {
    return !!this._isVegetarian;
  }

  getName() {
    throw new Error('This method must be overwritten!');
  }

  getDescription() {
    throw new Error('This method must be overwritten!');
  }

  getPrice() {
    throw new Error('This method must be overwritten!');
  }

  print() {
    throw new Error('This method must be overwritten!');
  }

  add() {
    throw new Error('This method must be overwritten!');
  }

  remove() {
    throw new Error('This method must be overwritten!');
  }

  getChild() {
    throw new Error('This method must be overwritten!');
  }

  createIterator() {
    throw new Error('This method must be overwritten!');
  }
}

class MenuItem extends MenuComponent {
  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  print() {
    console.log(this.getName() + ': ' + this.getDescription() + ', ' + this.getPrice() + 'euros');
  }

  createIterator() {
    var arr = [];
    return arr[Symbol.iterator]();
  }
}

class Menu extends MenuComponent {
  constructor(name, description) {
    super();
    this.iterator = null;
    this.menuComponents = [];
    this.name = name;
    this.description = description;
  }

  add(menuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent) {
    this.menuComponents = this.menuComponents.filter((component) => {
      return component !== menuComponent;
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
    console.log(this.getName() + ': ' + this.getDescription());
    console.log('--------------------------------------------');

    for (let component of this.menuComponents) {
      component.print();
    }
  }

  createIterator() {
    if (this.iterator === null) {
      this.iterator = this.menuComponents[Symbol.iterator]();
    }
    return this.iterator;
  }
}

class Mattress {
  constructor(menus) {
    this.menus = menus;
  }

  printMenu() {
    this.menus.print();
  }
}

export { Menu, MenuItem, Mattress };
