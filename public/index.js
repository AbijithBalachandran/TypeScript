"use strict";
// infer type = (implicit type);
let username = 'abijith';
let members = 30000;
// defined type = (explicit type);
let userName = 'abijith';
let subscribers = 30000;
let isSubscrubers = true;
let skills = ['js', 'Ts', 'css', 'html'];
let arr = [1, 2, 3, 4, 5];
let emptyArr = [];
let emptyObj = {};
let userObject = { name: 'abijith', age: 25 };
//  Interface ----------------------------------------
let userDetails = {
    name: 'abijith',
    age: 25,
    salary: 300000
};
let userDetail = {
    name: 'abijith',
    age: 25,
    salary: 300000,
    getName() {
        console.log(this.name);
    }
};
let userDetailss = {
    name: 'abijith',
    age: 25,
    salary: 300000,
    // getName(){
    //     console.log(this.name);
    // }
};
let skill = ["JS", "CSS", "TS", 10, 20, 30];
function getFirstName(userDetailss) {
    return { name: userDetailss.name, age: userDetailss.age };
}
let newValue = getFirstName(userDetailss);
console.log(newValue);
let currentStatus = "pending";
let toggleSwitch = "off";
toggleSwitch = "off";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
add("2", "3");
// Generics============================================================================;
function getAge(age) {
    return age;
}
getAge("20");
getAge(20);
const usersDetails = {
    name: 'abijith',
    age: 20
};
const adminsDetails = {
    age: 20,
    name: 'admin',
    role: 20
};
function getDetails(Details) {
    return Details;
}
const useValue = getDetails(usersDetails);
const adminValue = getDetails(adminsDetails);
useValue.name;
adminValue.name;
// Enums / as const================================================================================;
// enum statusT {
//     PENDING='pending',
//     COMPLETED='completed',
//     FAILED='failed'
//   }
var statusT;
(function (statusT) {
    statusT[statusT["PENDING"] = 1] = "PENDING";
    statusT[statusT["COMPLETED"] = 2] = "COMPLETED";
    statusT[statusT["FAILED"] = 3] = "FAILED";
})(statusT || (statusT = {}));
function getstatus(orderID, status) {
    console.log(orderID, "==", status);
}
getstatus('123456', statusT.COMPLETED);
// as const ==================================================;
let userNamee = 'abijith'; /** Type casting */
userNamee = "abijith";
// keyof and typeof =============================================;
const statusTypes = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed"
};
function getsstatus(orderID, status) {
    console.log(orderID, "==", statusTypes[status]);
}
getsstatus('12345', "COMPLETED");
// const personDetails:Readonly <person> ={
//     name : "Abijith",
//     age:23
// }
// const personDetails:Partial <person> ={
//     name : "Abijith",
//     age:23
// }
// const personDetails:Required <person> ={
//     name : "Abijith",
//     age:23
// }
// const persons:Pick<person,"name"|"age"> ={
//     name:"abijith",
//      age :20
// }
const persons = {
    name: "abijith",
    age: 20,
};
// type Food={
//     [index:string]:any 
// }
const food = {
    PIZZA: 'sdas',
    CHICKEN: {
        tt: 'thanthuri'
    }
};
// any /unknown /never / void/ null ================================================;

let userNames = "abijith"; // data being fetched from API;
const newName = userNames;
// never / void ;;;;
function throwError(message) {
    throw new Error(message);
}
//never nothing to return - it used for when the error throwing and use as a infinit loop
function logMessage(message) {
    console.log(message);
}
const currentObj = {
    name: "abijith",
    getCustomerName(message) {
        // return "hello";
        console.log(message);
    }
};
currentObj.getCustomerName('hello');
let customName = null;
function getName() {
    if (userName) {
        return "sndn";
    }
    else if (customName === null) {
        return "shdkd";
    }
}
