// ------------------ json ------------------
// json = JavaScript Object Notations , it is a data intercnhe fortmate 
//        used to exchange data between server and web application
//        JSON files {key:value} or [value1 , value2 ,value3]
//        JSON.stringify() = converts a JS object to a new JSON string
//        JSON.parse()  = converts a JSON string to a JS object

const names = ["Rudra","Aarav","Deepak","Avijit","Atharva"] ;
const person = {
    "name" : "Rudra" ,
    "age" : 22 ,
    "hobbies" : ["Football","gaming"]
}
const jsonString1 = JSON.stringify(names) ;
const jsonString2 = JSON.stringify(person) ;

// console.log(jsonString1) ;
// console.log(jsonString2) ;


// we will do  the reverse to parse the jsonString to convert it into js string 
// we will do JSON.parse(jsonString) == JS string 




// we can fetch a json file also 
// lets see how 


// fetch("people.json")
//      .then(responce => responce.json())
//      .then(values => values.forEach(value => console.log(value.age)) ) 
//      .catch(error => console.log(error));



// -------------------------------------------------- FETCH -------------------------------------------------------------

//fetch = Function used for making HTTP request to fetch resources
//        JSON style data , images , files 
//       Simplifies asynchronus data fetching in javascript and 
//       used for interacting with APIs to retrive and send 
//        data asynchronosly over web
//         fetch(url , {option})


// fetch("https://pokeapi.co/api/v2/pokemon/rudra")
//       .then(responce => {

//         if(!responce.ok){
//             throw new Error("Could not fetch resource")
//         }

//         return responce.json() ;



//       })
//       .then(data => console.log(data.moves))
//       .catch(error => console.log(error)) ;


// we can do all these above this using Async and Await
// let us see how 


async function fetchData(){

    try{


        const pokemonName =  document.getElementById("pokemonName").value.toLowerCase() ;

        const responce = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) ;

        if(!responce.ok){
            throw new Error("Could not fetch data") ;
        }
        const data = await responce.json() ;
        const pokemonImg = data.sprites.front_default ;
        const imgElement = document.getElementById("pokemonImg") ;
        imgElement.src = pokemonImg ;
        imgElement.style.display = "block" ;

    }catch(error){
        console.log(error) ;
    }
}

fetchData() ;

