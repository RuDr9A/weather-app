
// callback hell : It is a nested callback functions 
//                 which a old way of writing asynchronous code
//                It makes code hard to read and maintain               
//                the new methods like Promises and async/await are used to avoid callback hell


function functioon1(callback){
    setTimeout( () =>{
        console.log("Function 1 executed ") ;
        callback();
    }, 2000) ;
}
function functioon2(callback){
    setTimeout( () =>{
        console.log("Function 2 executed ") ;
        callback();
    }, 4000) ;
}
function functioon3(callback){
    setTimeout( () =>{
        console.log("Function 3 executed ") ;
        callback();
    }, 5000) ;
}
function functioon4(callback){
    setTimeout( () =>{
        console.log("Function 4 executed ") ;
        callback();
    }, 1000) ;
}
function functioon5(callback){
    setTimeout( () =>{
        console.log("Function 5 executed ") ;
        callback();
    }, 2400) ;
}

// functioon1(()=>{
//     functioon2(()=>{
//         functioon3(()=>{
//             functioon4(()=>{
//                 functioon5(()=>{
//                     console.log("All functions executed") ;
//                 })
//             })
//         })
//     })
// }) ;


// ----------------- PROMISE --------------------------
// Promise = an object that manages asynchronus operations 
//          wrap a promise object around {asynchronus code}
//            "i promise to return some value"
//           PENDING -> RESOLVED or REJECTED 
//           new promise((resolve,reject) => {asynchronus code})


// lets take a look 
//1. WALK THE DOG
//2. CLEAN THE KICTHEN
//3. TAKE OUT THE TRASH

function walkDog(){
    

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dogWalked = true ;
            if(dogWalked){
                resolve("You walk the dog") ;
            }else{
                reject("dog is not walked")
            }
            
        },3000);
    })
}

function cleanKicthen(){
    
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const cleaned = true ;
            if(cleaned){
                resolve("Cleaning the kicthen") ;
            }else{
                reject("Kitchen is not cleaned")
            }
            
        },5000);
    })
}

function trashOut(){
    
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const out = false ;
            if(out){
                resolve("trash is out");
            }else{
                reject("Take the trash out now!!!!")
            }
        
        },1000) ;
    })
}
// now we will the promises 

// walkDog().then(value => {console.log(value); return cleanKicthen()})
//          .then(value => {console.log(value); return trashOut()})
//          .then(value => {console.log(value); console.log("ALL TASKS FINISHED")})
//          .catch(error => {console.error(error)});

// we are using callbacks here 
// walkDog(() => {
//     cleanKicthen(() =>{
//         trashOut(() =>{
//             console.log("ALL TASK DONE")
//         })
//     })
// })


// ----------------- Async/Await ----------------------
// Async/Await = Async = makes a function to return a promise
//               Await = makes a async function to wasit for promise
//              its allows us to write asynchronus function in synchronus manner
//               Everything after Await s placed in an event queue


// now lets take look by using the above example

async function tasks() {
    try {
        const walkdogResult = await walkDog() ;
        console.log(walkdogResult) ;

        const kitchenCleanedResult = await cleanKicthen() ;
        console.log(kitchenCleanedResult) ;

        const trashOutResult = await trashOut() ;
        console.log(trashOutResult) ;

        consi=onselect.log("ALL TASK DONE")
    }catch(error){
        console.error(error) ;
    }
}
tasks() ;









