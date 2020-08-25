findAllURL = function changeAllURL(){
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";

    let div = document.createElement("div");
    // div.style.position = "fixed";
    // div.style.top = "50%";
    // div.style.left = "50%";
    // div.style.transform = "translate(-50%, -50%)";
    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.background = "red";
    div.style.color = "white";
    div.style.textAlign = 'center';
    div.style.lineHeight = '100vh';
    div.zIndex = "100000";
    div.style.fontSize = "10rem";
    div.style.fontWeight = "bolder";
    div.innerHTML = "GET TO WORK";

    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position =  "fixed";
    overlay.style.opacity =  "1";
    // overlay.style.transition =  "200ms ease-in-out";
    overlay.style.top =  "0";
    overlay.style.left =  "0";
    // overlay.style.right =  "0";
    // overlay.style.bottom =  "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, .8)";
    overlay.style.pointerEvents =  "none";
    overlay.style.zIndex =  "10000";

    overlay.appendChild(div);
    document.body.appendChild(overlay);
};


function doStuff()
{
  doAutoplay();

  findAllURL("bla");

  setTimeout(continueExecution, 50000)
}

function continueExecution()
{
  document.getElementById("overlay").outerHTML = "";
  document.body.style.pointerEvents = "all";
    document.body.style.overflow = "visible";

}

doStuff();

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