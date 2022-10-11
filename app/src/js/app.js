import '../css/app.css';
import '../css/timeline.css';
import '../css/contact_button.css';
import '../css/tab.css';
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

//Status first click timeline
var statusCarrer = 0;
var statusSchooling = 0;

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