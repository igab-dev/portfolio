/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./app/src/js/app.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: ./app/src/css/app.css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./app/src/css/timeline.css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./app/src/css/contact_button.css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./app/src/css/tab.css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./app/src/css/buttons.css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./app/src/js/views/export_contents.js\nvar contactContent = document.getElementById("contact-content");\nvar about = document.getElementById("about");\nvar carrer = document.getElementById("carrer");\nvar schooling = document.getElementById("schooling");\n\n\nvar shadowButton = document.querySelector(\'.segmented-control__color\');\n\nfunction playButton() {\n\n    //Play Button\n    var playBtn = document.getElementById(\'contact\');\n    var wave1 = document.querySelector(\'.circle__back-1\');\n    var wave2 = document.querySelector(\'.circle__back-2\');\n\n\n    playBtn.classList.toggle(\'shadow\');\n    wave1.classList.toggle(\'paused\');\n    wave2.classList.toggle(\'paused\');\n};\n;// CONCATENATED MODULE: ./app/src/js/views/display_contact.js\n\n\nfunction displayContact() {\n\n    about.style.display = "none";\n    document.getElementById("tab-1").checked = false;\n\n    schooling.style.display = "none";\n    document.getElementById("tab-2").checked = false;\n\n    carrer.style.display = "none";\n    document.getElementById("tab-3").checked = false;\n\n    shadowButton.style.display = "none";\n\n    if (contactContent.style.display == "none") {\n        playButton();\n    };\n\n    contactContent.style.display = "flex";\n};\n;// CONCATENATED MODULE: ./app/src/js/views/display_about.js\n\n\nfunction displayAbout() {\n\n    schooling.style.display = "none";\n    document.getElementById("tab-2").checked = false;\n\n    carrer.style.display = "none";\n    document.getElementById("tab-3").checked = false;\n\n    if (contactContent.style.display != "none") {\n        playButton();\n    };\n\n    contactContent.style.display = "none";\n\n    if (shadowButton.style.display == "none") {\n        shadowButton.style.display = "flex";\n    }\n\n    about.style.display = "contents";\n    document.getElementById("tab-1").checked = true;\n    \n};\n;// CONCATENATED MODULE: ./app/src/js/views/display_carrer.js\n\n\n//Status first click timeline\nvar statusCarrer = 0;\n\nfunction displayCarrer() {\n\n    about.style.display = "none";\n    document.getElementById("tab-1").checked = false;\n\n    schooling.style.display = "none";\n    document.getElementById("tab-2").checked = false;\n\n    if (contactContent.style.display != "none") {\n        contactContent.style.display = "none";\n        playButton();\n    };\n\n    carrer.style.display = "contents";\n    document.getElementById("tab-3").checked = true;\n\n    if (shadowButton.style.display == "none") {\n        shadowButton.style.display = "flex";\n    }\n\n    if (statusCarrer == 0) {\n        document.getElementById(\'last-job\').click();\n        return statusCarrer = 1;\n    }\n\n};\n;// CONCATENATED MODULE: ./app/src/js/views/display_schooling.js\n\n\n//Status first click timeline\nvar statusSchooling = 0;\n\nfunction displaySchooling() {\n\n    about.style.display = "none";\n    document.getElementById("tab-1").checked = false;\n\n    carrer.style.display = "none";\n    document.getElementById("tab-3").checked = false;\n\n    if (contactContent.style.display != "none") {\n        playButton();\n        contactContent.style.display = "none";\n    };\n\n    schooling.style.display = "contents";\n    document.getElementById("tab-2").checked = true;\n\n    if (shadowButton.style.display == "none") {\n        shadowButton.style.display = "flex";\n    }\n\n    if (statusSchooling == 0) {\n        document.getElementById(\'last-school\').click();\n        return statusSchooling = 1;\n    }\n\n};\n;// CONCATENATED MODULE: ./app/src/js/app.js\n\n\n\n\n\n\n\n\n\n\n\n\n\n//Initialize\nschooling.style.display = "none";\ncarrer.style.display = "none";\ncontactContent.style.display = "none";\nabout.style.display = "contents";\n\n//Define functions to tabs\ndocument.getElementById("contact").onclick = displayContact;\ndocument.getElementById("tab-1").onclick = displayAbout;\ndocument.getElementById("tab-2").onclick = displaySchooling;\ndocument.getElementById("tab-3").onclick = displayCarrer;\n\n\n//# sourceURL=webpack://igab.dev/./app/src/js/app.js_+_10_modules?')}},__webpack_require__={r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},__webpack_exports__={};__webpack_modules__["./app/src/js/app.js"](0,__webpack_exports__,__webpack_require__)})();