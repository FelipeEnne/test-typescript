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