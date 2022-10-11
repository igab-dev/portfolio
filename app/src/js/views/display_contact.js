import {contactContent, about, carrer, schooling, shadowButton, playButton} from "./export_contents";

export function displayContact() {

    about.style.display = "none";
    document.getElementById("tab-1").checked = false;

    schooling.style.display = "none";
    document.getElementById("tab-2").checked = false;

    carrer.style.display = "none";
    document.getElementById("tab-3").checked = false;

    shadowButton.style.display = "none";

    if (contactContent.style.display == "none") {
        playButton();
    };

    contactContent.style.display = "contents";
};