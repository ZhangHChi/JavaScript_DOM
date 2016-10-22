function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);

	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description")
	description.firstChild.nodeValue = text; //把description对象的第一个子节点的nodeValue属性值设置为变量text的值。
}