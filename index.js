// infer type = (implicit type);
var username = 'abijith';
var members = 30000;
// defined type = (explicit type);
var userName = 'abijith';
var subscribers = 30000;
var isSubscrubers = true;
var skills = ['js', 'Ts', 'css', 'html'];
var arr = [1, 2, 3, 4, 5];
var emptyArr = [];
var emptyObj = {};
var userObject = { name: 'abijith', age: 25 };
//  Interface ----------------------------------------
var userDetails = {
    name: 'abijith',
    age: 25,
    salary: 300000
};
var userDetail = {
    name: 'abijith',
    age: 25,
    salary: 300000,
    getName: function () {
        console.log(this.name);
    }
};
var userDetailss = {
    name: 'abijith',
    age: 25,
    salary: 300000,
    // getName(){
    //     console.log(this.name);
    // }
};
var skill = ["JS", "CSS", "TS", 10, 20, 30];
function getFirstName(userDetailss) {
    return { name: userDetailss.name, age: userDetailss.age };
}
var newValue = getFirstName(userDetailss);
console.log(newValue);
var currentStatus = "pending";
var toggleSwitch = "off";
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
var usersDetails = {
    name: 'abijith',
    age: 20
};
var adminsDetails = {
    age: 20,
    name: 'admin',
    role: 20
};
function getDetails(Details) {
    return Details;
}
var useValue = getDetails(usersDetails);
var adminValue = getDetails(adminsDetails);
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
var userNamee = 'abijith'; /** Type casting */
userNamee = "abijith";
// keyof and typeof =============================================;
var statusTypes = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed"
};
function getsstatus(orderID, status) {
    console.log(orderID, "==", statusTypes[status]);
}
getsstatus('12345', "COMPLETED");
