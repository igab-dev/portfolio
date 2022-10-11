import {contactContent, about, carrer, schooling, shadowButton, playButton} from "./export_contents";

export function displayAbout() {


    schooling.style.display = "none";
    document.getElementById("tab-2").checked = false;

    carrer.style.display = "none";
    document.getElementById("tab-3").checked = false;

    if (contactContent.style.display != "none") {
        playButton();
    };

    contactContent.style.display = "none";

    if (shadowButton.style.display == "none") {
        shadowButton.style.display = "flex";
    }

    about.style.display = "contents";
    document.getElementById("tab-1").checked = true;
};