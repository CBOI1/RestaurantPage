import "./styles.css";
import createAboutPage from "./about.js"

//npx webpack serve
//http://localhost:8080/


function wrapBody() {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.id = "wrapper";
    document.body.childNodes.forEach(child => {
        child.parentNode.insertBefore(wrapperDiv, child);
        wrapperDiv.appendChild(child);
    })
}

document.addEventListener("DOMContentLoaded", wrapBody)
//document.addEventListener("DOMContentLoaded", createAboutPage(document));