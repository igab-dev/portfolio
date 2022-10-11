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