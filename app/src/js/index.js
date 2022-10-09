/*  play button */
const playBtn = document.getElementById('contact');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');

function playButton() {
    playBtn.classList.toggle('shadow');
    wave1.classList.toggle('paused');
    wave2.classList.toggle('paused');
};


//Contents
var contactContent = document.getElementById("contact-content").style.display;
var about = document.getElementById("about").style.display;
var carrer = document.getElementById("carrer").style.display;
var schooling = document.getElementById("schooling").style.display;

//Shadow In Button
var shadowButton = document.querySelector('.segmented-control__color').style.display;

//Initialize
document.getElementById("schooling").style.display = "none";
document.getElementById("carrer").style.display = "none";
document.getElementById("contact-content").style.display = "none";
document.getElementById("about").style.display = "contents";


function displayContact() {
    
    schooling = "none";
    carrer = "none";
    about = "none";
    if (contactContent == "none") {
        contactContent = "contents";
        playButton();
    };
    shadowButton = "none";


};


function displayAbout() {
    schooling = "none";
    carrer = "none";
    if (contactContent != "none") {
        contactContent = "none";
        playButton();
    };
    about = "contents";
    if (shadowButton == "none") {
        shadowButton = "flex";
    }
};


function displaySchooling() {
    carrer = "none";
    about = "none";
    if (contactContent != "none") {
        contactContent = "none";
        playButton();
    };
    schooling = "contents";
    if (shadowButton == "none") {
        shadowButton = "flex";
    }
};


function displayCarrer() {
    about = "none";
    schooling = "none";
    if (contactContent != "none") {
        contactContent = "none";
        playButton();
    };
    carrer = "contents";
    if (shadowButton == "none") {
        shadowButton = "flex";
    }
};


//Define functions to tabs
document.getElementById("contact").onclick = displayContact;
document.getElementById("tab-1").onclick = displayAbout;
document.getElementById("tab-2").onclick = displaySchooling;
document.getElementById("tab-3").onclick = displayCarrer;