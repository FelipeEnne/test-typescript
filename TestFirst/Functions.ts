export{}
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 10));
// add(5, '10');

function add2(num1: number, num2?: number): number {
  return num2 != undefined ? num1 + num2 : num1;
}

console.log(add2(5));
// add(5, '10');

function add3(num1: number, num2: number = 10): number {
  return num1 + num2;
}

console.log(add3(5));
// add(5, '10');


function fullName(person : {firstName: string, lastName: string}) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

fullName(p);

interface Person {
  firstName: string;
  lastName: string;
}

function fullName2(person : Person) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p2 = {
  firstName: 'Bruce',
  lastName: 'Wayne Clone'
}

fullName2(p2);

interface Person3 {
  firstName: string;
  lastName?: string;
}

function fullName3(person : Person3) {
  person.lastName !== undefined ? console.log(`${person.firstName} ${person.lastName}`) : console.log(`${person.firstName}`);
}

let p3 = {
  firstName: 'Batman',
}

fullName3(p3);