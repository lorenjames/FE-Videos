var bankAccountBalance = 2002.58;

var firstName = "Loren";
var lastName = "Saywer";

var numberOfFriends = 150;

var isHotOutside = true;
var isHappy = false;

console.log('Hello World!');

console.log(5 + 13);
console.log(4 - 2);
console.log(6 * 7);
console.log(8 / 2);

console.log(bankAccountBalance - 30);
console.log(bankAccountBalance * numberOfFriends);
console.log(5 == 5);

// alert("It's working!!");

function myFunction(p1, p2) {
    return p1 * p2;
}

let x = myFunction(5, 12);
console.log("The result is " + x + ", isn't this fun?")

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('The result is ' + x + ', isn\'t this fun?', 'success')
    })
}





