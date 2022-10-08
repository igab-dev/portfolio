
/*  play button */
const playBtn = document.getElementById('contact');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');


/*  play button  */
function playButton() {
    playBtn.classList.toggle('shadow');
    wave1.classList.toggle('paused');
    wave2.classList.toggle('paused');
};

/*dynamic content*/
document.getElementById("schooling").style.display = "none";
document.getElementById("carrer").style.display = "none";
document.getElementById("contact-content").style.display = "none";
document.getElementById("about").style.display = "contents";

function displayContact() {
    document.getElementById("schooling").style.display = "none";
    document.getElementById("carrer").style.display = "none";
    document.getElementById("about").style.display = "none";
    if (document.getElementById("contact-content").style.display == "none") {
        playButton();
    };
    document.getElementById("contact-content").style.display = "contents";
    document.querySelector('.segmented-control__color').style.display = "none";
    
};

function displayAbout() {
    if (document.getElementById("contact-content").style.display != "none") {
        document.getElementById("contact-content").style.display = "none";
        playButton();
    };
    document.getElementById("schooling").style.display = "none";
    document.getElementById("carrer").style.display = "none";
    document.getElementById("about").style.display = "contents";
};

function displaySchooling() {
    if (document.getElementById("contact-content").style.display != "none") {
        document.getElementById("contact-content").style.display = "none";
        playButton();
    };
    document.getElementById("carrer").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("schooling").style.display = "contents";
};

function displayCarrer() {
    if (document.getElementById("contact-content").style.display != "none") {
        document.getElementById("contact-content").style.display = "none";
        playButton();
    };
    document.getElementById("about").style.display = "none";
    document.getElementById("schooling").style.display = "none";
    document.getElementById("carrer").style.display = "contents";
};

document.getElementById("contact").onclick = displayContact;
document.getElementById("tab-1").onclick = displayAbout;
document.getElementById("tab-2").onclick = displaySchooling;
document.getElementById("tab-3").onclick = displayCarrer;

