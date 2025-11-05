var x = 10;
{
    let x = 2;
}

const pi = 3.14159

console.log(pi);

// the following doesn't work because it is a const and cannot be changed
// pi = 6;
// console.log(pi);

// template literals
let myString = `Hello world, 
my name is Loren. 
Pi is equal to: ${pi}`;

console.log(myString)

// Arrow functions
// bind the current scope to the function


// let createFullName = (firstName, lastName) => firstName + ' ' + lastName;

// template literal:
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('Tom', 'Sawyer'))

// if multiple lines or curly braces are required, a return is necessary
let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

console.log(someFunction('Hello', 3))

// if you only have one parameter, no parenthesis are needed, if 0 params, just blank parenthesis

//Callbacks
//when you pass a function into another function to execute after code is comlpete, doesn't cause potential delay
function logUsername(user) {
    console.log(user);
}

sendHttpRequest('getUser', logUsername);

sendHttpRequest('getUser', user => console.log(user));

//Promises
//object that represents the eventual completion or failure of asynchronous operation

doSomethingthatReturnsAPromise()
    .then((value) => {
        console.log(value)
    }).catch((err) => {
        console.error(err)
    })

function handleEvent(value) {
    console.log(value)

    function handleError(err) {
        console.error(err)
    }

    returnAPromise()
        .then(handleEvent)
        .catch(handleError);