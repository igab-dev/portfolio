export var contactContent = document.getElementById("contact-content");
export var about = document.getElementById("about");
export var carrer = document.getElementById("carrer");
export var schooling = document.getElementById("schooling");


export var shadowButton = document.querySelector('.segmented-control__color');

export function playButton() {

    //Play Button
    var playBtn = document.getElementById('contact');
    var wave1 = document.querySelector('.circle__back-1');
    var wave2 = document.querySelector('.circle__back-2');


    playBtn.classList.toggle('shadow');
    wave1.classList.toggle('paused');
    wave2.classList.toggle('paused');
};