import Item from "./Item";
import Wrapper from "./Wrapper";

class Burger extends Item {
  get packing() {
    return new Wrapper();
  }
}

export default Burger;
