
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

var yturl = chrome.extension.getURL('images/yt.png');
var ytmini = document.querySelector(".style-scope .ytd-logo");
console.log(ytmini)
var newImage = document.createElement('img');
newImage.setAttribute("src", yturl)
newImage.setAttribute("alt", yturl)
newImage.setAttribute("style", "pointer-events: none;display: block;width: 100%;height: 30px;")
// newItem.innerHTML = 'src="'+yturl+'" alt="youtube logo"';

ytmini.parentElement.replaceChild(newImage, ytmini);
