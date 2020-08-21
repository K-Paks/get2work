

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
    // div.style.opacity = "1";
    div.innerHTML = "KURWA WRESZCIE";
    div.style.fontSize = "3rem";

    let overlay = document.createElement("div");
    overlay.className = "kupa";
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
}




findAllURL("https://www.youtube.com/");
findAllURL("https://www.facebook.com/");
// findAllURL("https://www.google.com/");

