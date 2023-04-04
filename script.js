var todoinput = document.querySelector("#todoinput");
var todoaddbutton = document.querySelector("#todoaddbutton");
var todoaddlist = document.querySelector("#todoaddlist");
var todoclearbutton = document.querySelector("#todoclearbutton");
var tododonebutton = document.querySelector("#tododonebutton");
var todoremovebutton = document.querySelector("#todoremovebutton");

var infodata = [];







function todoaddfunction() {
  var taskitem = todoinput.value
  if (!taskitem.trim()){
    return alert("please fill the row")
  }
  infodata.push(taskitem)


  todoaddlistfunction()
  
}



// Functons!

function todoaddlistfunction(){
  var addlisttag = [];
  for (var i in infodata){
    addlisttag.push(
      `<li class="list-group-item d-flex justify-content-between" id="todoaddlist">${+i+1}. ${infodata[i]} <div><button type="button" class="btn btn-success" id="tododonebutton" onclick="tododonebuttonfunction(${i})">Done!</button> <button type="button" class="btn btn-danger" id="todoremovebutton" onclick="todoremovebuttonfunction(${i})">Remove</button></div></li>`)    
  }
  
  // addlisttag.push(
  // `<li class="list-group-item d-flex justify-content-between" id="todoaddlist">${item}<div><button type="button" class="btn btn-success">Done!</button> <button type="button" class="btn btn-danger">Remove</button></div></li>`)
  
  // todoaddlist.innerHTML = addlisttag.map(
  //   function(index,item){return `<li class="list-group-item d-flex justify-content-between" id="todoaddlist">${index},${infodata}<div><button type="button" class="btn btn-success">Done!</button> <button type="button" class="btn btn-danger">Remove</button></div></li>`

  //   }
  // )

  todoaddlist.innerHTML = addlisttag.join("")
}



function todoremovebuttonfunction(i){
  infodata = infodata.filter(function(_,el_i){
    if(el_i !== i) return true;
    return false;

  });
  console.log(infodata);
  todoaddlistfunction();
 
}

function todoclearbuttonfunction(){
  infodata = [];
  todoaddlistfunction();
}


function tododonebuttonfunction(i){
  todoaddlist.setAttribute("class","text-decoration-line-through list-group-item d-flex justify-content-between");
console.log(i,todoaddbutton);

}





// EVENTS


todoaddbutton.onclick = todoaddfunction;
todoclearbutton.onclick = todoclearbuttonfunction;
tododonebutton.addEventListener("click", tododonebuttonfunction)
tododonebutton.addEventListener("click", todoremovebuttonfunction)



