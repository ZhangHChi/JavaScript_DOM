function showPic(whichpic){
	var soure = whichpic.getAttribute("href");
	if (!document.getElementById("placeholder")) return false;
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",soure);
	var text = whichpic.getAttribute("title");
	if (document.getElementById("description")) {
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
  }
  return true;
}
function prepareGallery(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			return !showPic(this);
		}
	}
}
addLoadEvent(prepareGallery);

function preparePlaceholder(){
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
var placeholder = document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src","images/placeholder.gif");
placeholder.setAttribute("alt","my images gallery");
var description = document.createElement("p");
description.setAttribute("id","description");
var desctext = document.createTextNode("Choose an image");
description.appendChild(desctext);
var gallery = document.getElementById("imagegallery");
insertAfter(placeholder,gallery);
insertAfter(description,placeholder);
}
addLoadEvent(preparePlaceholder);