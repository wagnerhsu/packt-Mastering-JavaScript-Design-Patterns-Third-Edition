class Color {
  applyColor() {
    throw new Error('This method should be overwritten');
  }
}

class Car {
  constructor(name, description, price, places = 2, color, brand = 'Cartisfaction') {
    this.brand = brand;
    this.name = name;
    this.description = description;
    this.price = price;
    this.places = places;
    this.color = color;
  }
  applyColor() {
    console.log(`${this.name} car painted with color ${this.color.applyColor()}`);
  }
}

class FamilyCar extends Car {
  constructor(color) {
    super('Family car', 'Enjoy with your family', 30000, 5, color);
  }
}

class Adventure4x4Car extends Car {
  constructor(color) {
    super('4x4 Adventure car', 'For people that does not care about existing paths', 55000, 2, color);
  }
}

class UrbanCar extends Car {
  constructor(color) {
    super('Urban car', 'Small and designed for the city', 12000, 2, color);
  }
}

class RedColor extends Color {
  applyColor() {
    return 'red';
  }
}

class GreyColor extends Color {
  applyColor() {
    return 'grey';
  }
}

class MatteBlackColor extends Color {
  applyColor() {
    return 'matte black';
  }
}

export { FamilyCar, GreyColor, Adventure4x4Car, MatteBlackColor, UrbanCar, RedColor };
