import Item from "./Item";
import BoxUp from "./BoxUp";

class SideDishes extends Item {
	get packing() {
		return new BoxUp();
	}
}

export default SideDishes;
