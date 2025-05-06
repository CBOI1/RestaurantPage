import "./styles.css";
import createAboutPageCallback from "./about.js"
import createMenuPageCallback from "./menu.js"
//npx webpack serve
//http://localhost:8080/


class RetuarantPage {
    #wrapBody() {
        const wrapperDiv = document.createElement("div");
        wrapperDiv.id = "wrapper";
        document.body.childNodes.forEach(child => {
            child.parentNode.insertBefore(wrapperDiv, child);
            wrapperDiv.appendChild(child);
        })
    }
    
    #clearContent() {
        const content = document.querySelector("#content");
        content.innerHTML = "";
    }

    #setupPage(pageSetter) {
        const callback = pageSetter(document);
        const page = this;
        return function() {
            page.#clearContent();
            callback();
        }
    }
    

    setUp() {
        this.#wrapBody();
        const aboutCallback = this.#setupPage(createAboutPageCallback);
        const menuCallback = this.#setupPage(createMenuPageCallback);
        (createAboutPageCallback(document))();
        const aboutButton = document.querySelector(".about-btn");
        aboutButton.addEventListener("click", aboutCallback);
        const menuButton = document.querySelector(".menu-btn");
        menuButton.addEventListener("click", menuCallback);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const page = new RetuarantPage;
    page.setUp();
})


