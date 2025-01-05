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

               11.any Type : Represent any type of value. Use sparingly as it disables type checking.
                            
                            let data:any = "hello";
                            data = 42  // valid but risky

               12.unknown Type : safer alternative to any . Requires type checking before usage.

                              let input : unknown = "hello";
                              if(typeof input === "string"){
                                console.log(input.toUpperCase());
                              }
               
               13.void Type :-Used for function that do not return a value.

                               function logMassage(massage:string):void{
                                console.log(message);
                               }              

               14.never Type : Represent a value that never occurs (eg.function that throws an error or runs indefinitely).

                                 fucntion throwError(message:string):never{
                                  throw new Error(message);
                                 }   

               15.Enums : Enums define a set of named constants : 

                         enum Direction {
                          up,
                          down ,
                          left , 
                          right,
                         }      

                         let move : Direction = Direction.up;


           Benefits  of using Type in TypeScript
           =======================================
           # Type safety : Catches errors during development.
           # Readability : Enhances code clarity and intent.
           # Maintainability : Simplifies working in large , complex Projects.
           # Intelligent Tooling : Enables Better auto-completion , refactoring , and debugging                    
      

[x] Union(|)/Optional(?);
          
          Union(|)
          ========
         Union is used to specify that a variable or parameter can hold one of multiple types .It allows combining multiple types into a single type.

         type combinedType = Type1 | Type2 | ..................

         let id: string | number;
            id = 123;        // Valid
            id = "ABC123";   // Valid
            id = true;       // Error: Type 'boolean' is not assignable to type 'string | number'.

           
           Optional(?)
           ===========
         The ? modifier is used to make a property or parameter Optional, meaning it may or may not be persent.
         Optional properties default to undefined when not provided.

          propertyName ? : Type;

          interface User {
            name : String;
            age? : number; //optional property 
          }

          let user1 : User = { name : "abijith"};
          let user2 : User = { name : "john" , age :24};


                           interface User {
                                 id: string | number;  // Can be either a string or a number
                                 age?: number | string; // Optional and can be a number or a string
                            }  



[X] Functions

     A function in TypeScript is a block of reusable code designed to perform a specific task .
     functions are foundational to any programming language , and TypeScript enhances them with static
     typing and type safety for parameters, return values and more.


                function greet ():void { // == put return type as void ==
                       console.log("hello world");
                }
 
               function greetUser(name: string): void {
                       console.log(`Hello, ${name}!`);
               }
                 greetUser("Abijith"); // Output: Hello, Abijith!


                 function add(a: number, b: number): number { ==return type is number==
                                return a + b;
                      }
                           console.log(add(5, 10)); // Output: 15

                    arrow function 
                    ===============
                    const greet = (name: string): string => `Hello, ${name}!`;
                      console.log(greet("Abijith")); // Output: Hello, Abijith!


                      Function Type
                      ==============
                      type MathOperation = (a: number, b: number) => number;

                        const add: MathOperation = (x, y) => x + y;
                        const subtract: MathOperation = (x, y) => x - y;

                        console.log(add(10, 5)); // Output: 15
                        console.log(subtract(10, 5)); // Output: 5

                        Never type
                        ==========

                        function throwError(message: string): never {
                                throw new Error(message);
                          }


                        Function with interface
                        ==========================

                       interface User {
                          name: string;
                           age: number;
                        }

                           function displayUser({ name, age }: User): string {
                                       return `User: ${name}, Age: ${age}`;
                               }

                            console.log(displayUser({ name: "Abijith", age: 25 })); // Output: User: Abijith, Age: 25





[X]  Named Type

    A Named Type in TypeScript refers to types that are explicitly declared with a name using either :
          # Type Aliases(type)
          # Interfaces (interface)

    Type Aliases = type TypeName = <type>;
    ====================================== 
           1. Primitive Type Alias:  type ID = string | number;
           2. Object Type Alias : type User = { 
                                      name : string;
                                      age : number;
                                     }   

           3. Function Type Alias : type MathOperation = (a:number, b:number)=> number;
           4. Array Type Alias : type StringArray = string[];


    Interfaces = interface InterfaceName { 
                    property : type;
                    method () :returnType;
                         }
    ========================================                     
      
             extending interfaces  
                  
                  interface person {
                    name : string;
                  }

                  interface Employee extend person{
                    employeeId:number;
                  }
                   
                   let worker: Employee = { name: "John", employeeId: 101 };


[x]  Functions overloading
         
         Function overloading allows a function to have multiple definitions with different parameter types
         and /or counts. TypeScript enables function overloading by defining multiple function signatures , 
         which are mapped to a single implementation.

         Key Points;
         ===========
         1, Overload signatures
         -----------------------
             * These define the allowed ways to call the function.
             * They are not the actual implementation, so they cannot contain logic.
         2, Implementation :
         --------------------
             * The single implementation must handle all overload
             * The implementation must accomodate all types and counts of parameters.
         3, TypeScript Rules :
         ---------------------
             * TypeScript enforces that the implementation matches the overload signatures.
             * If you call the function in a way that does not match an overload signature, TypeScript will
               raise an error      

[x]  Generics

       Generics in TypeScript allow you to create reusable , type-safe components that work with multiple 
       data types. Instead of specifying a specific type , generics provide a way to write a component or
       function that can accept differnet types while maintaining type safety.
      

      syntax : - A generic type is declared using angle bracket (<>) with a placeholder (commonly T,U,K,V);
               function identity <T>(value : T):T{
                 return value;
               }
          

          Examples of Generics :-

           1. generic Functions :-
           -------------------------
                          function identity <T>(value:T):T{
                            return value;
                          }

                          console.log(identity<string>("hello"));
                          console.log(identity<number>(42));
                          console.log(identity<boolean>(true));

           2.Generics Interfaces :-
           -------------------------
                     interface Box<T>{
                      value:T;
                     }              
             
             const stringBox : Box<string> = {value:"hello};
             const numberBox : box<number> = {value :123};

             console.log(stringBox.value);
             console.log(numberBox.value);

           3.Generic Classes;-
           -------------------
                          class DataStore<T>{
                            private data: T[]=[];

                            addItem(item:T):void{
                              this.data.push(item);
                            }
                            getItems():T[]{
                              return this.data;
                            }
                          }

                          const stringStore = new DataStore<string>();

                          stringStore.addItem("Hello");
                          stringStore.addItem("World");

                          console.log(stringStore.getItems());

                          const numberStore = new DataStore<number>();

                              numberStore.addItem(1);
                              numberStore.addItem(2);
                          console.log(numberStore.getItems()); // Output: [1, 2]
          
           4.Generic Constraints:-
           -----------------------

                      function logLength<T extends {length:number}>(item:T):void{
                              console.log(item.length);
                         } 

                          logLength('Hello'); //output=5

                          logLength([1,2,3]); //utput =3

                    "// Invalid: number does not have a length property
                    // logLength(42); // Error: Argument of type 'number' is not assignable "


           5.Generic Functions With Multiple Parameters;-
           ----------------------------------------------
            
                       function merge<T,U>(obj1:T , obj2: U)T & U {
                           return {...obj1 , ...obj2};
                        }

                        const person = merge({name:"abijith"},{age:25});
                        console.log(person);

           6.Default Generic Types:-
           --------------------------

                         interface Response<T = string> {
                            data:T;
                         }         

                         const stringResponse : Response = {data:"Success"};
                         const numberResponse : Response<number> = {data:200};

           7.Generic Utility Types:-
           --------------------------

                           *Partial<T> : Makes all Properties optional.
                           *Readonly<T> : Makes all properties read-only.
                           *Recoed<k , T> : Constructs an object type with keys of type k and values of type T                

                         
                      type User ={
                         id : number;
                         name : string;
                      }

                      const user : Partial<User>={};
                      const readonlyUser:Readonly <User> = {id:1,name:"Abijith"};

                        "// readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property."


                 key advantages of generics
                 ---------------------------
                 # code resuability :- write a function or class once and use it for different type
                 # Type safety :- prevent runtime type errors by enforcing type relationships.
                 # Improved Readability :- Use descriptive type placeholders(eg:T,U) for clarity.       


[x]  Enums / as const 

 An Enum (short for "Enumeration") is a feature in TypeScript taht allows you to define a set of named constants.
 Enums make it easier to work with sets of ralated  values , improving readability 
 and reducing errors caused by hard-coded strings or numbers 
                 
                1. Numeric Enums:The default type for enums.\
                2, String Enums : Using string values instead of numbers.
                3, Heterogeneous Enums:A mix of string and numeric values.


                numberic enums:
                        
                        enum Direction {
                            Up,    // 0
                            Down,  // 1
                            Left,  // 2
                            Right  // 3
                          }

                      console.log(Direction.Up);    // Output: 0
                      console.log(Direction[0]);    // Output: "Up"

                       // Custom values
                             enum Status {
                                Success = 1,
                                Failure = -1,
                                Pending = 0,
                            }

                       console.log(Status.Failure);  // Output: -1

                string enums:   

                       enum Direction {
                          Up = "UP",
                          Down = "DOWN",
                          Left = "LEFT",
                          Right = "RIGHT",
                        }

                       console.log(Direction.Up); // Output: "UP"



                Heterogeneous Enums:
                        enum Mixed {
                          No = 0,
                          Yes = "YES" 
                        }

                   console.log(Mixed.No);  // Output: 0
                    console.log(Mixed.Yes); // Output: "YES"


          AS CONST 
          ========

          The 'as const' keyword in TypeScript creates a readonly literal type. It prevents changes to the
          value and infers their types as their literal values , not the genaral types like string or number.

           why use 'as const'
           -----------------
           * To create immutable, strongly-typed constants.
           * To prevent accidental changes to an object or array.
                  

[x]  keyof / typeof

  Key of operator
  ---------------
   The keyof operator generates a union of all keys of a given type. It's often used to define types
   that depend on the keys of an object.

     type ObjectKeys = keyof SomeObjectType;
      
              type Person = {
                name:string;
                age: number;
                isStudent:boolean;
              };

              type PersonKeys = keyof Person;

              let key : PersonKeys = "name"

[x]  Utility Type

[x]  any/unknown/never/void


