let n = 10 ;
console.log(`JavaScript is ${n} loaded`);
//window.alert("Welcome to the JavaScript file!");

// document.getElementById("1").textContent = "JavaScript is working!";
// document.getElementById("2").textContent = "JavaScript is working!";



//this is about variables and data types in JavaScript
// types : number , string , boolean , null , undefined , object , symbol
let x =10 ;
console.log(`My number is ${x}`+` and I am learning JavaScript!`+` It's fun.`) ;
console.log(typeof x) ;
console.log(`hello `+x) ;

x += 5 ;
console.log(`My new number is ${x}`) ;

let y = x**2 ;
console.log(`The value of y is ${y}`) ;


// user input and output in JavaScript
// let userName = window.prompt("Enter your name : ") ;
// console.log(`Hello ${userName} ! Welcome to JavaScript programming.`) ; 



let username ;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("input").value ;
    document.getElementById("heading").textContent = `Hello ${username}` ;
}

// type conversion in JavaScript
let a = "5" ;
console.log(typeof a) ;
let b = Number(a) ;
console.log(typeof b) ;

let c = String(b) ;
console.log(typeof c) ;

let d = Boolean(b) ;
console.log(typeof d) ;

// const keyword 
const PI = 3.14159 ;
console.log(`the valueof pi is ${PI}`) ;
//PI = 3.14 ; this will give error because PI is constant if we will try to change


// using maths library in JavaScript
let num = 3.15 ;
//let z = Math.floor(num) ;
//let z = Math.ceil(num) ;
//let z = Math.round(num) ;
//let z = Math.trunc(num) ;
// max , min , random , abs , pow , sqrt are aslo there 
//console.log(z) ;


// random function 
let max = 100 ;
let min = 50 ;
let test  = Math.floor(Math.random()*(max-min+1))+min ;
console.log(test)

const pressme = document.getElementById("pressme") ;
const output = document.getElementById("output") ;

let show ;

pressme.onclick = function(){
    show = Math.floor(Math.random()*6)+1 ;
    console.log(show);
    output.textContent = show ;
}



// else if 

let age = 19 ;
if (age>=18){
    console.log("Hell yaaaa") ;
}else{
    console.log("shittt") ;
}

// string methods in javascript 

let str = "  Hello World  " ;
console.log(str.length) ;
console.log(str.trim()) ;
console.log(str.toUpperCase()) ;
console.log(str.toLowerCase()) ;
console.log(str.indexOf("o")) ;
console.log(str.lastIndexOf("o")) ;
console.log(str.slice(2,7)) ;
console.log(str.replace("World","JavaScript")) ;
console.log(str.includes("Hello")) ;
console.log(str.startsWith("  He")) ;
console.log(str.endsWith("ld  ")) ; 
console.log(str.replaceAll("o","h")) ;
console.log(str.slice(0,5)) ;

// methods chaining
let newStr = str.trim().toUpperCase().replace("WORLD","Everyone") ;
console.log(newStr) ;

// equality
let val1 = 5 ;
let val2 = "5" ;

console.log(val1 == val2) ; // only value check 
console.log(val1 === val2) ; // value and type both check

// for loop
for(let i =0 ;i<5 ; i++){
    console.log(`The value of i is ${i}`) ;
}
// while loop
let j =0 ;
while(j<5){
    console.log(`The value of j is ${j}`) ;
    j++ ;
}

// do while loop
let k =0 ;
do{
    console.log(`The value of k is ${k}`) ;
    k++ ;
}while(k<5) ; 

// functions in javascript

function add(x,y){
    return x+y ;
}
console.log(add(1,6)) ;

// arrays
let arr = [1,2,3,4,5] ;
console.log(arr) ;
console.log(arr.length) ;
arr.push(6) ;
console.log(arr) ;
arr.pop() ;
console.log(arr) ;
console.log(arr.indexOf(3)) ;
console.log(arr.includes(4)) ;
arr.shift() ;
console.log(arr) ;
arr.unshift(0) ;
console.log(arr) ;

// spread operator
// use to 
let arr2 = [...arr,6,7,8] ;
console.log(arr2) ;
let maxi = Math.max(...arr2) ;
console.log(maxi) ;

// rest operator

function sum(...numbers){
    let sum = 0 ;
    for (let number of numbers){
        sum += number ;
    }
    return sum ;
}
console.log(sum(1,2,3,4,5)) ;

// callback functions

// clalback are functions passed as arguments to other functions
//they are used to ensure that a function is not called before a task is completed


addition(displaySum,5,10) ;

function addition(showSum,x,y){
    let sum = x+y ;
    showSum(sum) ;
}
function displaySum(sum){
    console.log(`The sum is ${sum}`) ;
}

let numbers = [1,2,3,4,5,6] ;


numbers.forEach(double) ;
numbers.forEach(display) ;

function display(element){
    console.log(element) ;
}
function double(element , index ,array){
    array[index] = element * 2 ;
}

// map() method
const student = ["Rudra","Avijit","Deepak","Aarav"] ;
let newstudent = student.map(upperCase) ;
console.log(newstudent) ;

function upperCase(element){
    return element.toUpperCase() ;
}


// filter method

let newWords = student.filter(getShortWord) ;
console.log(newWords) ;

function getShortWord(element){
    return element.length>=6 ;
}

// reduce method 

const prices = [34,56,1,26,123] ;

const bill = prices.reduce(pay) ;
console.log(bill);

function pay(accumulator , element){
    return accumulator+element ;
}

// functions expressions , we use function as variables and parameters

const hello = function(){
    console.log("Hello hiiiii") ;
}
hello() ;

setTimeout(function(){
    console.log("Heyyy")
},6) ;

// arrow functions , more consice way to write 

const again = () => {console.log("Using arraow function")

                    console.log("new way to write something ")                                    };
again() ;

// objects in java 

const person = {
    firstname : "Rudra",
    lastname : "Singh",
    job: "Student",
    age : 21 ,

    hello : function(){
        console.log(`Heyy my name is ${this.firstname} and i want ice cream`)
    }

}
person.hello() ;

// constructors 

function car(model,color,year,speed){
    this.model = model ;
    this.color = color ;
    this.year = year ;
    this.speed = speed ;
    this.message = () => console.log(`i have ${this.model}`) ;
}

const p1 = new car("Lambo" ,"Red","2006",403) ;
const p2 = new car("Ferrari","Yellow","2007",306) ;

p2.message() ;

// classes 

class employee {

    name ;
    class = 12 ;


    constructor(name ,id,salary){
        this.name = name ;
        this.id = id ;
        this.salary = salary ;
    }

    increment(value){
        return value+this.salary ;
    }
    printClass(){
        return console.log(this.class);
    }

}

const em1 = new employee("Rudra",123,12009)
const em2 = new employee("Avijit",102,11345)

console.log(em1.increment(20000));


// inheritace
class animal {
    alive = true ;

    eaten(){
        console.log(`${this.name} has eaten his meal`)
    }
    dead(){
        console.log(`${this.name} is dead`)
    }
}
class rabbit extends animal {
    name = "Rabbit" ;
}
class tiger extends animal {
    name = "tiger" ;
}
class lion extends animal {
    name = "lion" ;
}

const a1 = new rabbit();
const a2 = new tiger();
const a3 = new lion();
console.log(a1.alive);
a1.eaten();


// getter and setter 

class rectangle{

    constructor(width,length){
        this.width = width ;
        this.length = length ;
    }

    set width(newWidth){
        if(newWidth>=0){
            this._width = newWidth ;
        }else{
            console.error("Enter a valid width")
        }
    }
    set length(newLength){
        if(newLength>=0){
            this._length = newLength ;
        }else{
            console.error("Enter a valid length")
        }
    }

    get width(){
        return this._width ;
    }
    get length(){
        return this._length ;
    }  
    get area(){
        return this._width*this._length ;
    } 
}

const rect = new rectangle(10,21) ;
console.log(rect.length);
console.log(rect.width);
console.log(rect.area);


class human {
    constructor(firstname,lastname,age){
        this.firstname = firstname ;
        this.lastname = lastname ;
        this.age = age ;
    }

    set firstname(newFirstname){
        if(typeof newFirstname === "string" && newFirstname.length >0) this._firstname = newFirstname ;
        else console.error("Enter a valid firstname") ;
    }
     set lastname(newLastname){
        if(typeof newLastname === "string" && newLastname.length >0) this._lastname = newLastname ;
        else console.error("Enter a valid lastname") ;
    }
     set age(newAge){
        if(typeof newAge === "number" && newAge>0) this._age = newAge ;
        else console.error("Enter a valid age")
    }
    get firstname() {
        return this._firstname ;
    }
    get lastname() {
        return this._lastname ;
    }
    get age(){
        return this._age ;
    }

}

const person1 = new human("Rudra","singh",23) ;
console.log(person1.firstname) ;
console.log(person1.lastname) ;
console.log(person1.age) ;

// destructuring

let num1 = 2 ;
let num2 = 4 ;

// traditional way
// let temp = num1 ;
// num1 = num2 ;
// num2 = temp ;

// destructuring way
[num1,num2] = [num2,num1] ;

console.log(`num1 : ${num1} , num2 : ${num2}`) ;

// array destructuring

const colors = ["red","green","blue"] ;

// traditional way
// const red = colors[0] ;
// const green = colors[1] ;
// const blue = colors[2] ;

// destructuring way
const [red,green,blue] = colors ;

console.log(`colors are : ${red} , ${green} , ${blue}`) ;

// object destructuring

const student1 = {
    name : "Rudra",
    age : 21 ,
    course : "Btech"
} ;

// traditional way
// const name1 = student1.name ;
// const age1 = student1.age ;
// const course1 = student1.course ;

// destructuring way
const {name :name1 , age: age1 , course: course1} = student1 ;
console.log(`Student details : Name : ${name1} , Age : ${age1} , Course : ${course1}`) ;





// in functions parameters destructuring

function displayStudent({name , age , course = "MBBS"}){
    console.log(`Student details : Name : ${name} , Age : ${age} , Course : ${course}`) ;
}

displayStudent(student1) ;

// nested object 
const laptop = {
    brand : "Dell" ,
    model : "XPS 15" ,
    specs : {
        ram : "16GB" ,
        storage : "512GB SSD" ,
        processor : "Intel i7"
    }
} ;

// traditional way
// const ram = laptop.specs.ram ;
// const storage = laptop.specs.storage ;
// const processor = laptop.specs.processor ;


class sus {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(street,city){
        this.street = street ;
        this.city = city ;      
    }
}

const personA = new sus("Rudra",21,"123 Main St","New York") ;
console.log(personA.name) ;
console.log(personA.age) ;
console.log(personA.address.street) ;
console.log(personA.address.city) ;

// array of objects 
const fruits = [
    {name: "Apple" , color: "Red" , price: 120} ,
    {name: "Banana" , color: "Yellow" , price: 60} ,
    {name: "Orange" , color: "Orange" , price: 80}
] ; 

//fruits.forEach( fruit => console.log(fruit.color )) ;
// const newfruit = fruits.map( fruit => fruit.name ) ;
// console.log(newfruit) ;
// const expensiveFruits = fruits.filter( fruit => fruit.price > 70 ) ;
// console.log(expensiveFruits) ;

const maxFruit = fruits.reduce((max,fruit) =>
    (fruit.price > max.price ? fruit : max) 
    ) ;
console.log(`The most expensive fruit is ${maxFruit.name} with price ${maxFruit.price}`) ;
// sort 
fruits.sort((a,b) => a.price - b.price ) ;
console.log(fruits) ;

fruits.sort((a,b) => a.name.localeCompare(b.name)) ;
console.log(fruits) ;


// Fisher -Yates Shuffle Algorithm
function shuffleArray(array){
    for(let i = array.length -1 ; i>0 ; i--){
        const j = Math.floor(Math.random()*(i+1)) ;
        [array[i],array[j]] = [array[j],array[i]] ;
    }
    return array ;
}

const sampleArray = [1,2,3,4,5,6,7,8,9,10] ;
const shuffledArray = shuffleArray(sampleArray) ;
console.log(shuffledArray) ;

// date 
const now = new Date() ;
console.log(now) ;
console.log(now.getFullYear()) ;
console.log(now.getMonth()+1) ;
console.log(now.getDate()) ;
console.log(now.getHours()) ;
console.log(now.getMinutes()) ;
console.log(now.getSeconds()) ;


// closures 
// A closure is a function that has access to 
// its outer function scope even after the outer function has returned.


function outer() {

    let message = "heyy i am from outer function" ;

    function inner() {
        console.log(message) ;
    }
    inner() ;
}

outer() ;

function counter (){
    let count = 0 ;
    function increment(){
        count++ ;
        console.log(count);
    }
    return {increment} ;
}
const counter1 = counter() ;
counter1.increment() ;
counter1.increment() ;
counter1.increment() ;

import{sayHello} from "./EA6Module.js" ;

sayHello() ;
// synchronous vs asynchronous
// Synchronous code is executed line by line, blocking further execution until the current operation completes.
// Asynchronous code allows other operations to run while waiting for a task to complete, using callbacks, promises, or async/await.

console.log("Synchronous 1") ;
setTimeout(() => {
    console.log("Asynchronous after 2 seconds") ;
},2000) ;
console.log("Synchronous 2") ;

// we can handle asynchronous operations using Callbacks ,Promises and async/await
// Callbacks
function fetchDataCallback(callback){
    setTimeout(() => {
        console.log("Sample Data from Callback");
        callback() ;
    },2000) ;
}

fetchDataCallback((data) => {
    console.log("Hello from callback") ;
}) ;

// errors handling in javascript

try {
    console.log(z) ; // z is not defined
} catch (error){
    console.error("An error occurred: " + error.message) ;
} finally {
    console.log("Execution completed.") ;
}

// DOM is Document Object Model
// It is a programming interface for web documents
// It represents the page so that programs can change the document structure , style and content
// The DOM represents the document as a tree of nodes
// We can use JavaScript to manipulate the DOM

// class selector

// it gives a collection of all elements in the document with the specified class name like a list/array

const selectClass = document.getElementsByClassName("output") ;
let say = selectClass[2] ;
console.log(say.textContent) ;

selectClass[0].style.backgroundColor = "lightblue" ;

// tag selector

// it gives a collection of all elements in the document with the specified tag name like a list/array

const selectTag = document.getElementsByTagName("p") ;
let greet = selectTag[1] ;
console.log(greet.textContent) ;

// query selector

// it returns the first element that matches a specified CSS selector(s) in the document
// it contains functionalities like textContent , style , etc

const querySel = document.querySelector(".output") ;
console.log(querySel.textContent) ;

querySel.style.fontSize = "30px" ;
 
// query selector all   
// it returns a static NodeList of all elements that match a specified CSS selector(s) in the document
// it contains functionalities like forEach, length , etc

const querySelAll = document.querySelectorAll(".output") ;
querySelAll.forEach( (element) => {
    console.log(element.textContent) ;
    element.style.color = "red" ;
} ) ;

function just(a,b,c,d){
    return a+b+c+d ;
}
console.log(just(...[1,2,3,4]))

// fisrt element child
const parents = document.getElementById("fruits") ;
const firstChild = parents.firstElementChild ;
firstChild.style.color = "green" ;

// last elemnt child 
const lastChild = parents.lastElementChild ;
lastChild.style.color = "blue" ;

const ulElement = document.querySelectorAll("ul") ;
ulElement.forEach(ul => {
    const lastchild = ul.lastElementChild ;
    lastchild.style.color = "purple" ;

})

// children method 

const element = document.getElementById("movies") ;
const children = element.children ;

Array.from(children).forEach(child => {
    child.style.fontWeight = "bold" ;   
})




