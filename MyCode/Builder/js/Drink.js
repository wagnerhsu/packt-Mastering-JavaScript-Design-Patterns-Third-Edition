import Item from './Item'
import Bottle from './Bottle';

class Drink extends Item {
  get packing() {
    return new Bottle();
  }
}

export default Drink;
