let firstName = 'Sam';

if (firstName == 'Sam') {
    console.log('Hello Sam');
} else {
    console.log('Hey, ' + firstName)
}

let costOfMilk = 3;

if (costOfMilk < 2) {
    console.log('We will buy 2 gallons')
} else if (costOfMilk < 3) {
    console.log('We will buy 1 gallon.')
} else {
    console.log('No thank you, too damn much!')
}

let grade = 'B';

switch (grade) {
    case 'A':
        console.log(grade + ' range= 90-100')
        break;
    case 'B':
        console.log(grade + ' range= 80-89')
        break;
    case 'C':
        console.log(grade + ' range= 70-79')
        break;
    default:
        console.log(grade + ' range= 0-69')
        break;
}

let a = 5;
let b = 6;

if (a == 5) {
    if (b == 6) {
        console.log('a = 5 and b = 6')
    }
}

if (a == 5 && b == 6) {
    console.log('Flattened: a = 5 and b = 6')
}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}


console.log('Whatever comes after the loop')

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let whileA = 110;

while (whileA < 10) {
    console.log(whileA);
    whileA++;
}

do {
    console.log(whileA);

} while (whileA < 10)

for (i in names) {
    console.log(names[i])
}

for (i of names) {
    console.log(i)
}


// var name = window.prompt('What is your name? ');
// window.alert(`Welcome, ${name}`);





var loggedIn = false;

while (!loggedIn) {
    let username = prompt('Username:');
    let password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
        loggedIn = true;
    } else {
        alert('Incorrect Username or Password.');
    }
}