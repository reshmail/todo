function deleteItem(e){
	e.parentNode.remove();
}


 var list=document.getElementById("list");
 function addtodo(){
 var todo=document.getElementById('todo-item');
var li=document.createElement('li');//create tag
var litext=document.createTextNode(todo.value);//reate node
li.appendChild(litext);

//delete
var delbtn=document.createElement("button");
var deltext=document.createTextNode("delete")
delbtn.setAttribute("class","btn1")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(deltext)

var editbtn=document.createElement("button")
var edittext=document.createTextNode("edit")
editbtn.appendChild(edittext)
li.appendChild(delbtn);
li.appendChild(editbtn)
//insert the text in li  
list.appendChild(li);



todo.value="";



editbtn.setAttribute("onclick","editItem(this)")
editbtn.setAttribute("class","btn1")}

function deleteall(){
	list.innerHTML=""
}
function editItem(e){

var edit=prompt("enter to update",e.parentNode.firstChild.nodeValue)

e.parentNode.firstChild.nodeValue=edit
}