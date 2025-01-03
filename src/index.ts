
// infer type = (implicit type);
let username = 'abijith';
let members = 30_000;


// defined type = (explicit type);

let userName:string = 'abijith';
let subscribers:number = 30_000;
let isSubscrubers:boolean = true;
let skills:string[] = ['js','Ts','css','html'];
let arr : number[] = [1,2,3,4,5];
let emptyArr : [] =[];
let emptyObj : {} = {};
let userObject : {name:string;age:number} = {name:'abijith',age:25};




//  Interface ----------------------------------------

// interface IntrefaceName{
//     propertyName:typeof;
//     methodName(param:type):ReturnType;
// }







let userDetails:{name:string ; age:number ; salary:number} ={
    name:'abijith',
    age : 25,
    salary:300000
};

// 1.Basic Object Type 

interface Detailsss{
    name : string;
    age : number;
    salary:number;
    getName:()=>void;
}

let userDetailssss:Detailsss ={
    name:'abijith',
    age : 25,
    salary:300000,
    getName(){
        console.log(this.name);
        
    }
};

// 2.Optional Properties

interface Product{
    name :string;
    price:number;
    description?:string; //optional property 
}

const product : Product ={
    name : "Laptop",
    price:1500,
};

// 3.Readonly Properties

interface Car {
    readonly make : string;
    model : string;
}

const car : Car ={
    make:"Toyota",
    model:"Camry",
}
// car.make = "honda" ===  Error: cannot assign to 'make' because it is a read only property.


// 4.Function Type interface

interface Add{
    (a:number,b:number):number;
}

const adding:Add =(x,y)=>x+y;
console.log("interface function type  "+add(5,10));


// 5.Extending Interfaces

interface Person {
    name : string;
    age : number;
}

interface Employee extends Person {
    emplyeeId :number;
    department:string;
}

const emplyee :Employee={
    name:"Abijith",
    age:25,
    emplyeeId:101,
    department:"IT",
};


// 6.Index Signatures 

interface Dictionary {
    [key :string]:string;
}

const translation :Dictionary ={
    hello :"hola",
    world :"Mundo",
};





// Type ===================================================================;


type Detail = {
    name : string;
    age :number;
    salary: number;
    getName:()=>void;
}

let userDetail:Detail ={
    name:'abijith',
    age : 25,
    salary:300000,
    getName(){
        console.log(this.name);
        
    }
};








// Union type (|) / optional type (?) ;==================================;


 type Details = {
    name : string;
    age :number;
    salary: number;
    getName?:()=>void;
}

let userDetailss:Details ={
    name:'abijith',
    age : 25,
    salary:300000,
    // getName(){
    //     console.log(this.name);
        
    // }
};


let skill:(string|number|boolean)[] = ["JS","CSS","TS",10,20,30];



// Functions in Typescript ===========================================;


// function getName(userDetailss:Details){
//      return userDetailss.name
// }

//  console.log(getName(userDetailss));
  
 type GetFirstName ={
    name : string;
    age:number
 }

function getFirstName(userDetailss:Details):GetFirstName{
  return {name:userDetailss.name , age:userDetailss.age};
}
 let newValue = getFirstName(userDetailss);

 console.log(newValue);
 


//  Named Type ================================================;


type statusType = "pending" | "completed" | "failed";
type ToggleSwitch = "on" | "off";

let currentStatus:statusType = "pending";
let toggleSwitch : ToggleSwitch = "off";

toggleSwitch = "off";


// Function Overloading ===============================================;


// function add (num1:number | string, num2:number | string) :number|string {

//     if(typeof num1 === "string" || typeof num2 === "string"){
//         return num1 +""+ num2;
//     }
//     return num1 = num2;

// }

// add (2,3);
// add("2","3");



// function Overloading

function add(num1:number , num2 : number):number;
function add(num1:string , num2 : string):string;
function add(num1:any,num2:any):any{
    return num1 + num2;
}

add (2,3);
add("2","3");






// Generics============================================================================;

function getAge<T>(age:T):T{
    return age;
}

getAge<string>("20");
getAge<number>(20);

//interface -------------------------------
//  interface userDetails {
//     name : string;
//     age :number
// }

// interface adminDetails extends userDetail{
//     role:string
// }
// -----------------------------------------



//  type --
type userDetail = {
    name : string;
    age :number
}

type adminDetail = userDetail &{
    // age : number;
    // name : string;
    role : number;
}

const usersDetails :userDetail ={
    name: 'abijith',
    age:20
}

const adminsDetails : adminDetail={
    age:20,
    name:'admin',
    role:20
}


function getDetails<T>(Details:T):T{
    return Details;
}

const useValue = getDetails<userDetail>(usersDetails);
const adminValue = getDetails<adminDetail>(adminsDetails);

useValue.name;
adminValue.name;





// Enums / as const================================================================================;


// enum statusT {
//     PENDING='pending',
//     COMPLETED='completed',
//     FAILED='failed'
//   }

 enum statusT {
    PENDING=1,
    COMPLETED,
    FAILED
  }

  function getstatus(orderID: string, status:statusT){
    console.log(orderID,"==",status);
    
  }
getstatus('123456',statusT.COMPLETED);



// as const ==================================================;


let userNamee = 'abijith' as const; /** Type casting */
userNamee = "abijith";



// keyof and typeof =============================================;


const statusTypes={
    PENDING : "pending",
    COMPLETED : "completed",
    FAILED : "failed"
}as const;

function getsstatus(orderID:string,status:keyof typeof statusTypes){
    console.log(orderID,"==",statusTypes[status]);
}

getsstatus('12345',"COMPLETED");  


// Utility Types ===================================================;



// type person={
//     readonly name :string;
//      age: number;
// }


type person={
     name :string;
     age: number;
     salary :number;
}


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



const persons:Omit<person,"salary"> ={
    name:"abijith",
     age :20,

}




// type statusTypes = "pending" | "completed" | "failed";
// const Status:Exclude<statusTypes,"pending">=""



// type Food ={
//     KFC : string;
//     PIZZA : string;
//     CHICKEN : string;

// }


type Food = Record <string,any>;

// type Food={
//     [index:string]:any 
// }

const food:Food={
    PIZZA:'sdas',
    CHICKEN :{
        tt:'thanthuri'
    }
}


    



// any /unknown /never / void/ null ================================================;



let userNames : unknown = "abijith"; // data being fetched from API;

const newName =  userNames as string



// never / void ;;;;


function throwError(message:string):never{
    throw new Error(message);
}

//never nothing to return - it used for when the error throwing and use as a infinit loop

function logMessage(message:string):void{
    console.log(message);
}

// void also is same it used to indicate that a function does not return a value. Commonly used for functions that perform actions like logging, triggering other functions, or performing side effects.


type Customer ={
    name :string;
    getCustomerName:(message:string)=> void;
}


const currentObj : Customer={
    name:"abijith",
    getCustomerName(message){
        // return "hello";
        console.log(message);
        
    }
}

currentObj.getCustomerName('hello');



let customName : string | null = null;

function getName (){
    if (userName) {
        return "sndn"

    }else if(customName === null){
          return "shdkd"
    }

}


