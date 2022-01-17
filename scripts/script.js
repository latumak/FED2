// variabele
var toggleSwitch = document.getElementById("toggle");
var bodyElement = document.body;

var filterButton = document.querySelector("main#detail section:first-of-type button");
var filterProducten = document.querySelector("main#detail section:nth-of-type(2)");
var kruisButton = document.querySelector("main#detail section:nth-of-type(2) button:first-child");
var toepasButton = document.querySelector("main#detail section:nth-of-type(2)>div:last-child button");

var likeButton = document.querySelector("main#detail section:nth-of-type(3) article button img"); 

var audio = document.getElementById("audio");
var psgTitel = document.querySelector("main#detail h1");


// functies
function veranderMode() {
    // console.log("verander");
    bodyElement.classList.toggle("dark-mode");
}

function likeProduct() {
    var image = document.querySelector("main#detail section:nth-of-type(3) article button img");
    if (image.src.match ("geliked")) {
        image.src = "images/detail/liken.png";
        likeButton.classList.remove("like");
    }

    else {
        image.src = "images/detail/geliked.png";
        likeButton.classList.add("like");
    }
}
// bron: https://techfunda.com/howto/444/changing-of-images

function openFilter () {
    // console.log("hij werkt");

    filterProducten.classList.add("filterOpen");

}

function sluitFilter() {
    // console.log("werkt die?");
    filterProducten.classList.remove("filterOpen");
}

function speelAnthem () {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}
// bron: https://siongui.github.io/2012/10/12/javascript-toggle-sound-onclick/


// events
toggleSwitch.addEventListener("click", veranderMode);

filterButton.addEventListener("click", openFilter);
kruisButton.addEventListener("click", sluitFilter);
toepasButton.addEventListener("click", sluitFilter);

likeButton.addEventListener("click", likeProduct);

psgTitel.addEventListener("click", speelAnthem);