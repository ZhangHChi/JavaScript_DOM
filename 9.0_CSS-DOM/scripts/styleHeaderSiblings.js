function styleHeaderSiblings(){
      if(!document.getElementsByTagName) return false;
         var headers = document.getElementsByTagName("h1");
         var elem;
           for(var i=0;i<headers.length;i++){
              elem = getNextElement(headers[i].nextSibling);
            //elem.style.fontWeight = "bold";
            //elem.style.fontSize = "1.2em";
            addClass(elem,"intro");
                }
             }
      function getNextElement(node){
          if(node.nodeType == 1){  //判断节点类型是否是元素节点
                return node;      //如果成立直接返回node的值，否则继续向下执行
            }
              if(node.nextSibling){ //判断是否有下一个节点
                 return getNextElement(node.nextSibling);//成立的话返回原目标节点的下一个节点继续从第一步开始判断
           }
                      return null;//都不成立的话返回一个空值 
        }
        addLoadEvent(styleHeaderSiblings);
function addClass(element,value){
  if (!element.className) {
    element.className = value;
  }else{
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}