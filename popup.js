blockThePage = function changeAllURL(){
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";

    let div = document.createElement("div");
    div.id = "get2workText";
    div.style.color = "white";
    div.style.textAlign = 'center';
    div.style.lineHeight = '100vh';
    div.zIndex = "100000";
    div.style.fontSize = "8rem";
    div.style.fontWeight = "bolder";
    div.innerHTML = "<span>GET TO WORK</span>";

    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position =  "fixed";
    overlay.style.opacity =  "1";
    overlay.style.top =  "0";
    overlay.style.left =  "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, .8)";
    overlay.style.pointerEvents =  "none";
    overlay.style.zIndex =  "10000";

    overlay.appendChild(div);
    document.body.appendChild(overlay);
};



blockThePage();
let char = 0;
const text = document.getElementById("get2workText");
const strText = text.textContent;
const splitText = strText.split("_");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
text.innerHTML += "<span>" + splitText[i] + "</span>"
}

const span = text.querySelectorAll('span');
doStuff();



function doStuff()
{
    doAutoplay();
    // check(function () {
    //     continueExecution();
    // }, function () {
    //     textTimer = setInterval(onTick, 300);
    // });
    setTimeout(continueExecution, 5000);

}

function continueExecution()
{
    document.getElementById("overlay").outerHTML = "";
    document.body.style.pointerEvents = "all";
    document.body.style.overflow = "visible";

}



function check(finishCallback, waitingCallback) {
    let maxtime = 5000;
    let start = new Date().getTime();
    condition = false;

    let timer = setInterval(function(){
        if (condition) {
            clearInterval(timer);
            finishCallback;
        } else {
            if (new Date().getTime() - start > maxtime) {
                condition = true
            } else {
                waitingCallback();
            }
        }
    }, 1500);
}

function onTick() {
    if (char > 0 || text.querySelector('span.shown') != null) {
        const spanShown = text.querySelector('span.shown');
        spanShown.classList.remove('shown');
        spanShown.style.opacity = "0";
    }

    span[char].classList.add('shown');
    span[char].style.opacity = "1";


    char++;

    if (char === splitText.length) {
        clearInterval(textTimer);
        textTimer = null;
        char = 0;
    }
}

function doAutoplay() {
  let autoplay = document.createElement("autoplay");
  autoplay.innerHTML = "<iframe src=\"silence.mp3\" allow=\"autoplay\" id=\"audio\" style=\"display: none\"></iframe>";
  document.body.appendChild(autoplay);

  let url = chrome.runtime.getURL('audio.mp3');
  let audio = new Audio(url);
  audio.play();
}
// https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome autoplay

// https://stackoverflow.com/questions/43424355/waiting-for-a-sound-to-stop-before-playing-the-next-sound play?