// EA6 module in javascript providing basic arithmetic operations that we can import in other files

// Function to add two numbers
export function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
export function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Function to calculate the modulus of two numbers
export function modulus(a, b) {
    return a % b;
}

// Function to calculate the power of a number
export function power(base, exponent) {
    return Math.pow(base, exponent);
}  

export function sayHello() {
    console.log("Hello from EA6Module!");
}