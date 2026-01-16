// ----------Example 1 for adding heading-------


// STEP 1 : CREATE THE HEADING ELEMENT 
const heading = document.createElement("h1") ;
heading.id = "heading" ;
heading.style.color = "red";
heading.style.textAlign = "center" ;


// STEP 2: ADD TEXT TO THE HEADING ELEMENT 
heading.textContent = "This is a new heading , added thorought JS " ;

// STEP 3 : APPEND ELELMENT TO THE BODY OF THE INDEX FILE 
// document.body.append(heading) ;  this will be the last child of the body
// document.body.prepend(heading) ; this will be the first child of the body

document.getElementById("box1").prepend(heading) ;



// STEP 4 : REMOVE THE HTML ELEMENT 
document.getElementById("box1").removeChild(heading)


// -------------- Event Listners Exammple 2 -------------------

const myBox = document.getElementById("MyBox") ;

myBox.addEventListener("click" , event =>{
    event.target.style.backgroundColor = "tomato" ;
    event.target.textContent = "Ohh noo!!!😭" ;
}) ;
myBox.addEventListener("mouseover" , event =>{
    event.target.style.backgroundColor = "peachpuff" ;
    event.target.textContent = "Ummmm🤔" ;
}) ;

myBox.addEventListener("mouseout" , event =>{
    event.target.style.backgroundColor = "lightgreen" ;
    event.target.textContent = "CLICK ME🥹" ;
}) ;



