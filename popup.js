findAllURL = function changeAllURL(text){
  var current = window.location.href;
  if(current.startsWith(text)){

    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";

    let div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.zIndex = "100000";
    div.innerHTML = "Działa";
    div.style.fontSize = "3rem";

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
    overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
    overlay.style.pointerEvents =  "none";
    overlay.style.zIndex =  "10000";

    overlay.appendChild(div);
    document.body.appendChild(overlay);


  }
};


function doStuff()
{

  let test = document.createElement("test");
  test.innerHTML = "<iframe src=\"silence.mp3\" allow=\"autoplay\" id=\"audio\" style=\"display: none\"></iframe>";
  document.body.appendChild(test);

  let url = chrome.runtime.getURL('audio.mp3');
  let audio = new Audio(url);
  audio.play();

  findAllURL("https://www.youtube.com/");
  findAllURL("https://www.facebook.com/");

  setTimeout(continueExecution, 2000)
}

function continueExecution()
{
  document.getElementById("overlay").outerHTML = "";
  document.body.style.pointerEvents = "all";
    document.body.style.overflow = "visible";

}

doStuff();

