import quesadillaPath from "./quesadilla-with-corn-polina-tankilevitch.jpg";
import veggieWrapPath from "./veggie-corn-dish-bulbfish.jpg";
import pizzaPath from "./pizza-with-corn-enginakyurt.jpg"
import tacoPath from "./corn-tortilla-tacos-melaudelo.jpg";

class AboutPage {
    #quesadillaAlt = "quesadilla with corn inside";
    #veggieWrapAlt = "flour tortilla with corn, tomatoes, and avocado inside";
    #pizzaAlt = "pizza with veggie toppings";
    #tacoAlt = "corn tortilla tacos with meat, onions, cilantro, and salsa";
    #aboutText =  "Every meal at the corn cob shop has out key ingredient: corn. Whether you're in the mood for something more laid back like a pizza or something more gourmet like fajitas, we got you covered. We are proud of the quality of our corn dishes and the accolades they have earned us. We are currently a 2 michelin star restuarant and are listed in the World's Best 50 Restaurants.";
    #document;
    constructor(doc) {
        this.#document = doc;
    }

    setUpPage() {
        const contentDiv = this.#document.querySelector('#content');
        const h2Elem = this.#document.createElement("h2");
        h2Elem.textContent = "The Corn Cob Shop";
        const gridContainer = this.#document.createElement("div");
        gridContainer.classList.add("grid");
        this.#setUpGrid(gridContainer);
        contentDiv.appendChild(h2Elem);
        contentDiv.appendChild(gridContainer);
    }

    #createImg(path, alt, className) {
        const imgElem = this.#document.createElement("img");
        imgElem.src = path;
        imgElem.alt = alt;
        imgElem.classList.add(className);
        return imgElem;
    }

    #setUpGrid(gridElem) {
        const quesadillaImg = this.#createImg(quesadillaPath, this.#quesadillaAlt, "quesadilla");
        const veggieWrapImg = this.#createImg(veggieWrapPath, this.#veggieWrapAlt, "veggie-wrap");
        const pizzaImg = this.#createImg(pizzaPath, this.#pizzaAlt, "pizza");
        const tacoImg = this.#createImg(tacoPath, this.#tacoAlt, "taco");
        gridElem.append(quesadillaImg, veggieWrapImg, pizzaImg, tacoImg);
        this.#addAboutText(gridElem);
    }

    #addAboutText(gridElem) {
        const aboutDiv = this.#document.createElement("div");
        const title = this.#document.createElement("h3");
        const para = this.#document.createElement("p");
        aboutDiv.classList.add("about");
        title.textContent = "Where delicious corn based meals shine";
        para.textContent = this.#aboutText;
        aboutDiv.append(title, para);
        gridElem.appendChild(aboutDiv);
    }

}

function createAboutPageCallback(doc) {
    return function() {
        const about = new AboutPage(doc);
        about.setUpPage();
    }
}

export default createAboutPageCallback;
