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
// Functions in Typescript ===========================================;
function getName(userDetailss) {
    return userDetailss.name;
}
console.log(getName(userDetailss));
