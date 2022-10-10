import '../css/app.css';
import '../css/json-viewer.css';

//Play Button
var playBtn = document.getElementById('contact');
var wave1 = document.querySelector('.circle__back-1');
var wave2 = document.querySelector('.circle__back-2');

function playButton() {
    playBtn.classList.toggle('shadow');
    wave1.classList.toggle('paused');
    wave2.classList.toggle('paused');
};

//Contents
var contactContent = document.getElementById("contact-content");
var about = document.getElementById("about");
var carrer = document.getElementById("carrer");
var schooling = document.getElementById("schooling");

//Shadow In Button
var shadowButton = document.querySelector('.segmented-control__color');

//Initialize
schooling.style.display = "none";
carrer.style.display = "none";
contactContent.style.display = "none";
about.style.display = "contents";

//Status first click timeline
var statusCarrer = 0;
var statusSchooling = 0;


function displayContact() {

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


function displayAbout() {


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


function displaySchooling() {

    about.style.display = "none";
    document.getElementById("tab-1").checked = false;

    carrer.style.display = "none";
    document.getElementById("tab-3").checked = false;

    if (contactContent.style.display != "none") {
        playButton();
        contactContent.style.display = "none";
    };

    schooling.style.display = "contents";
    document.getElementById("tab-2").checked = true;

    if (shadowButton.style.display == "none") {
        shadowButton.style.display = "flex";
    }

    if (statusSchooling == 0) {
        document.getElementById('last-school').click();
        return statusSchooling = 1;
    }

};


function displayCarrer() {

    about.style.display = "none";
    document.getElementById("tab-1").checked = false;

    schooling.style.display = "none";
    document.getElementById("tab-2").checked = false;

    if (contactContent.style.display != "none") {
        contactContent.style.display = "none";
        playButton();
    };

    carrer.style.display = "contents";
    document.getElementById("tab-3").checked = true;

    if (shadowButton.style.display == "none") {
        shadowButton.style.display = "flex";
    }

    if (statusCarrer == 0) {
        document.getElementById('last-job').click();
        return statusCarrer = 1;
    }

};


//Define functions to tabs
document.getElementById("contact").onclick = displayContact;
document.getElementById("tab-1").onclick = displayAbout;
document.getElementById("tab-2").onclick = displaySchooling;
document.getElementById("tab-3").onclick = displayCarrer;