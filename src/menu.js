import quesadillaPath from "./quesadilla-with-corn-polina-tankilevitch.jpg";
import simpleVeggieDishPath from "./veggie-corn-dish-bulbfish.jpg";
import tacoPath from "./corn-tortilla-tacos-melaudelo.jpg";
import shrimpPlatePath from "./shrimp-plate-mantoine.jpg"

class Item {
    #name;
    #description;
    #price;
    #path;
    constructor(name, description, price, path) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#path = path
    }
    get name() {
        return this.#name;
    }
    get description() {
        return this.#description;
    }
    get price() {
        return this.#price;
    }
    get path() {
        return this.#price;
    }
}

class Menu {
    #document;
    constructor(document) {
        this.#document = document;
    }

    #quesadilla = new Item(
        "Quesadilla", 
        'Quesadilla with grilled chicken, grilled mozarella cheese, whole grilled onions, black beans, red peppers, and our delicious yellow corn. Served with choice of softdrink and our special sauce on the side.',
        "$8.99",
        quesadillaPath
    );
    #simpleVeggieDish = new Item(
        "Simple Veggie Dish", 
        "Tomatoes, avocado, corn, and two of our freshly made soft flaky tortillas. Seasoned with basil, lemon, and salt. Comes with choice of soft drink.",
        "$5.99",
        simpleVeggieDishPath
    );
    #tacos = new Item(
        "Tacos",
        "Three of our freshly made tacos with your choice of meat among lengua, carnitas, grilled chicken, and carne asada. The corn tortillas are made from scratch. Comes with cilantro, grilled onions, limes, and salsa. Served with choice of soft drink.",
        "$11.99",
        tacoPath
    );
    #shrimpPlate = new Item(
        "Shrimp Plate",
        "Grilled shrimp, avocado, tomatoe, red onion, red pepper, and corn. Served with choice of soft drink, salsa, and two fresh corn tortillas.",
        "12.99",
        shrimpPlatePath
    );



    #document;
    constructor(document) {
        this.#document = document;
    }
    #createMenuItem(item) {
        const menuItem = this.#document.createElement("div");
        const itemName = this.#document.createElement("h3");
        const itemDescription = this.#document.createElement("p");
        const itemPrice = this.#document.createElement("p");
        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemPrice.price = item.price;
        menuItem.append(itemName, itemDescription, itemPrice);
        return menuItem;
    }

    setUpMenu() {
        const quesadilla = this.#createMenuItem(this.#quesadilla);
        const simpleVeggieDish = this.#createMenuItem(this.#simpleVeggieDish);
        const tacos = this.#createMenuItem(this.#tacos);
        const shrimpPlate = this.#createMenuItem(this.#shrimpPlate);
        const title = this.#document.createElement("h3");
        title.textContent = "Menu";
        const content = this.#document.querySelector("#content");
        content.append(title, quesadilla, simpleVeggieDish, tacos, shrimpPlate);
    }
}