TypeScript
==============

TypeScript is a stongly typed , object-oriented, compiled language developed and maintained by microsoft. it is a supersot of Javascript which means it builds on JavaScript by adding optional static typing, interfaces , and other modern features to help developers write scalable and maintainable code.

features
---------

* static typing = TypeScript allow you to specify types for variables , function  parameters and return values. Types are ckecked ar compiletime ,reducing run time errors.

* Type Inference = Automatically infers the type of a variable based on its initial value, so you don't always need to explicity declare types.

* Object-Oriented Programming(OOP) = Support classes , Inheritance and access modifiers  eg:-public , private, protected

* Modern Jacascript Features = Support ES6+ Features (like let ,const ,arrow functions ) and compiles them to Javascript for broader browser compatibility


* compatibility with javaScript = Since TypeScript is a superset of JavaScript , all valid JavaScript code is valid TypeScript code

* Interfaces  =  Defines custom types for objects making the code more structured.

* Tooling Suport =  Provides excellent support for IntelliSense, auto-completion , and debugging in IDEs like Visual Studio Code.



==================================================================================



[x] Inter Types (Implicit Types) type inference;

Implicity types occur when the type of a variable is automatically determined by the programined by the programming language based on the assigned value, without explicitly specifying the type. 



[x] Defining Types (explicit Types);

Explicit Types are types that are manually specified by the programmer when declaring variables , function parameters , or return types . This is commonly used in statically typed languages like TypeScript , C++, or java. 

Using explicity types ensures types safety and clarity , making the code easier to understand and maintain.



[x] Interface


An Inference in TypeScript is a way to define the Shape of an object including its properties , methods and their types . It is a blueprint that enforces a structure or contract on data ensuring that objects conform to specific requirements.
interfaces improve code consistency , readability and mainatinability, especially in large projects.
         
         Features
         =========
           1.Define Object structure  :- Specifies the required properties and their types for an object.
           2.Optional properties :- properties can be marked as optional using a ?.
           3.Readonly properties :-properties can be made read-only using the readonly keyword.
           4.Function Type Definitions :- Interfaces can define the signature of a function.
           5.Inheritance :- interfaces can extend other interfaces, enabling reusability.
  

[x] Types

 In TypeScript , types are used to define the shape and structure of data. They hellp ensure type safety by enabling developers to specify the type of variables,function parameters , return values and more. TypeScript provides various ways to define types, including built-in primitive types , complex types and user-defined types.

               Categories of Types
               ======================

               1.Primitive types
               2.Object Types
                      eg;- let user: { name: string; age: number } = { name: "Abijith", age: 25 };

                     *) with Optional properties :-let product: { name: string; price?: number } = { name: "Laptop" };
                     *)readonly properties :- let car: { readonly brand: string } = { brand: "Toyota" };
                      // car.brand = "Honda"; // Error

               3.Array Types
                      
                      *)Array of a Single Type:- let number:number[] =[1,2,3,4];
                      *)Array with mixed Types :- let value :(string | number)[] = ['text',42];

               4.Tuple Types :- Tuples represent arrays with fixed lengths and type s for each element : =let user :[string,number] =["abi",25];

               5.Function Types :

                      function greet(name:string):string{
                               return `hello, ${name}`;
                           }
                             
               6.Union Types :- allow a variable hold one of several types;
                                    
                                    let id : string | number;
                                     id ="abc123";
                                     id:123;

               7. Intersection Types :- combine multiple into one ;
                            
                            type Person = {name : string};
                            type Employee = Person & {employeeId : number};

                            let worker: Employee = {name : " Abijith" , employeeId:101};

               8.Custom Types : You can define custom types using type or interface.

                              *Using Type: 

                              type User ={
                                name:string;
                                age:number;
                              };

                              *Using interface :
                             
                             interface User {
                               name : string;
                               age : number;
                             }

               9.Type Aliases : Used to define reusable;

                     type Point = {x:number;y:number};
                     let position:Point = {x :10 , y : 20}              
                
               10.Literal Types : A variable can have a specific value as its type;

                            let direction : "Up" | "down" | "left" | "right";

                            direction = "up" -> valid
                            direction = "diagonal" -> error 

                            
      

[x] Union(?)/Optional(|);

[X] Functions

[X]  Named Type

[x]  Functions overloading

[x]  Generics

[x]  Enums / as const

[x]  keyof / typeof

[x]  Utility Type

[x]  any/unknown/never/void


