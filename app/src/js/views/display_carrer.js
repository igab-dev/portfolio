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