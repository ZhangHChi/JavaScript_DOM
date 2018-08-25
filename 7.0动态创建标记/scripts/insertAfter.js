function insertAfter(nweElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(nweElement);
	}else{
		parent.insertBefore(nweElement,targetElement.nextSibling);
	}
}