
var url = chrome.extension.getURL('images/logo.png');
var mini = document.querySelector(".logo img");
if (mini !== null){
    mini.src = url
    mini.classList.add('motionsa')
}

var img = document.querySelector(".k1zIA.rSk4se img");

if (img !== null){
    img.src = url
    img.srcset = []
    img.classList.add('motionsa')
}
