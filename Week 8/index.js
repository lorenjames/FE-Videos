class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    } //'this' specifies field that belongs to instance

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student('Tom', 'Sawyer', '1234567891', 'A'); //'new' instanciates new instance of class after invoking constructor
let student2 = new Student('Sam', 'Smith', '4021234567', 'A')

student1.introduce();
student2.introduce();

//when to create new class? each class should be in charge of 1 thing, everytime you have a new concept that has properties, create a class

class NotificationSender {
    constructor(status) {
        this.status = status;
    }

    sendNotification(notification) {
        console.log('Sending: ' + notification)
    }

    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }

}

class PromotionSender extends NotificationSender {
    constructor(status) {
        super(status);

    }


    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;

        } else if (status === 'SILVER') {
            return .15;
        }
        return 0;

    }

}

class CollectionsSender extends NotificationSender {
    constructor(status) {
        super(status)

    }


    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELINQUENT') {
            return 25;
        }
        return 5;
    }
}

let collectionSender = new CollectionsSender('OVERDUE');

collectionSender.sendNotification('this is a test collections notification.')



try {
    myList.push('hello');

} catch (err) {
    console.log(err)
}

console.log('goodbye')

class C { } console.log(typeof C);
