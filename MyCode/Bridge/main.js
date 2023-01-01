import { FamilyCar, GreyColor, Adventure4x4Car, MatteBlackColor, UrbanCar, RedColor } from './js/Bridge'
const familyCar = new FamilyCar(new GreyColor());
const adventureCar = new Adventure4x4Car(new MatteBlackColor());
const urbanCar = new UrbanCar(new RedColor());

familyCar.applyColor();
adventureCar.applyColor();
urbanCar.applyColor();
