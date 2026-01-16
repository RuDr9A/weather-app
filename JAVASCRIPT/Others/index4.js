// this is going to about NodeList module
// A nodelist is the collection of nodes as a result of querySelectorAll or other DOM methods that return multiple elements.

// Example of NodeList 

let buttons = document.querySelectorAll(".myButtons") ;
console.log(buttons) ;

// buttons.forEach(button => {
//     button.style.backgroundColor = "lightgreen " ;
// })
buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "lightgreen " ;
    })  
})

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(193, 59%, 40%) " ;
    })  
})
buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(193, 59%, 62%) " ;
    })  
})
// NodeList is similar to an array but it is not an array. It is a collection of nodes.
// You can use forEach method to iterate over the NodeList.
// But you cannot use other array methods like map, filter, reduce etc. on NodeList.
// If you want to use array methods, you can convert the NodeList to an array using Array.from() method or spread operator [...NodeList].

// Converting NodeList to Array
let buttonsArray = Array.from(buttons) ;
// or
// let buttonsArray = [...buttons] ;

// Now you can use array methods on buttonsArray
buttonsArray.map(button => {
    console.log(button.textContent) ;
}) ;

//Add an button
const newButton = document.createElement("button") ;
newButton.textContent = "Button 5" ;
newButton.classList = "myButtons" ;
document.body.appendChild(newButton) ;

// Note: The new button will not be part of the original NodeList 'buttons'.
// You need to query again to get the updated NodeList.
buttons = document.querySelectorAll(".myButtons") ;
console.log(buttons) ;
// remember NodeList is static, it does not update automatically when the DOM changes.



// remove buttons

buttons.forEach(button =>{
    button.addEventListener( "click" , event =>{
        event.target.remove() ;
        button = document.querySelectorAll(".myButtons") ;
        console.log(button) ;
    })
})

// ClassList property
// The classList property returns the class names of an element as a DOMTokenList object.
// It has methods to add, remove, toggle and check for classes.

// the add method adds a class to the element
//newButton.classList.add("newClass") ;

// the remove method removes a class from the element
//newButton.classList.remove("myButtons") ;

// the toggle method toggles a class on the element
//newButton.classList.toggle("toggleClass") ;

// the contains method checks if the element has a class
//console.log(newButton.classList.contains("myButtons")) ; // true
  
