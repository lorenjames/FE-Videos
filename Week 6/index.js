// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];
// let counter = 1;

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let grade of gradesArray) {
//     console.log((counter++) + ": " + grade);
// }

// // Now Add Another Grade
// gradesArray.push(85);
// // Reset the counter to 1;
// counter = 1;
// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let grade of gradesArray) {
//     console.log((counter++) + ": " + grade);
// }

let customerNames = [];

customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

// console.log(customerNames[1]);

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i])
}

for (name of customerNames) {
    console.log(name)
}

function myFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

// myFunction();

function createFullName(firstName, lastName) {
    // console.log(firstName + ' ' + lastName)
    return firstName + ' ' + lastName;
}

// createFullName('Loren', 'Craig-Mohebali')
console.log(createFullName('Loren', 'Craig-Mohebali'))

let fullName = createFullName('Loren', 'Craig-Mohebali')

console.log(fullName)

// object literal
let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Twister',
    printDvdName: function () {
        console.log(this.dvdName) //this. refers to object itself 
    }
}

console.log(dvdPlayer.depth);
dvdPlayer.printDvdName();

console.log(2 == "2");
console.log(2 === "2");

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas', 'Oliver', 'Loki']

let lengths = names.map(function (element) {
    return element.length;
});

console.log(lengths)

let sum = lengths.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum)

names.forEach(function (element) {
    console.log(element)
});

let evens = names.filter(function (element) {
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(1, 1);
console.log(removedElement)

