import '../css/app.css';
import '../css/timeline.css';
import '../css/contact_button.css';
import '../css/tab.css';
import '../css/buttons.css';

import { displayContact } from "./views/display_contact";
import { displayAbout } from "./views/display_about";
import { displayCarrer } from "./views/display_carrer";
import { displaySchooling } from "./views/display_schooling";

import { contactContent, about, carrer, schooling } from "./views/export_contents";

//Initialize
schooling.style.display = "none";
carrer.style.display = "none";
contactContent.style.display = "none";
about.style.display = "contents";

//Define functions to tabs
document.getElementById("contact").onclick = displayContact;
document.getElementById("tab-1").onclick = displayAbout;
document.getElementById("tab-2").onclick = displaySchooling;
document.getElementById("tab-3").onclick = displayCarrer;
