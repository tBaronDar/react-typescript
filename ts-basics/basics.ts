// Primitives: numbers, strings, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number; //not Number

age = 12;

let userName: string;

userName = "Max";

let isDay: boolean;

isDay = true;

// More complex types

let hobbies: string[]; //An array of only strings

hobbies = ["sports", "cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Rourou",
  age: 433,
};

// person ={
//     isEmployee: true //This isn't storable
// }

//An array of these objs
let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

// course = 1234 <- this throws error course's type is infered string

// Using union types

let otherCourse: string | number = "Next.js - The Complete Guide";

otherCourse = 3; // This is valible because union type

// Aliases (custom types).

// definition
type Person = {
  name: string;
  age: number;
};

// use
let student: Person = {
  name: "Sousou",
  age: 2,
};

// Functions & types

function add1(a: number, b: number): number | string {
  return a + b;
}

// This fcn returns void
function printSomething(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const demoStringArray = ["a", "b", "c"];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]

const updatedStringArray = insertAtBeginning(demoStringArray, "s"); //["s", "a", "b", "c"]

// Notice how the 2 updated arrays have different types. Each array's type is locked in
//after the execution. Typescript looks in the content of each parameter and it infers
//each type.
