
function showPic(whichpic){
	if (!document.getElementById("placeholder")) return false; 
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName !="IMG") return false;
	placeholder.setAttribute("src",source);
	if (!document.getElementById("description")){
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	if (description.firstChild.nodeType == 3) {//验证是不是文本节点
	description.firstChild.nodeValue = text; //把description对象的第一个子节点的nodeValue属性值设置为变量text的值。
    }
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
