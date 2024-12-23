
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


let userDetails:{name:string ; age:number ; salary:number} ={
    name:'abijith',
    age : 25,
    salary:300000
};


// interface Details{
//     name : string;
//     age : number;
//     salary:number;
//     getName:()=>void;
// }


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


function getName(userDetailss:Details){
     return userDetailss.name
}

 console.log(getName(userDetailss));
  

function getFirstName(userDetailss:Details):string{
  return userDetailss.name;
}
 let newValue = getFirstName(userDetailss);

 console.log(newValue);
 


 







