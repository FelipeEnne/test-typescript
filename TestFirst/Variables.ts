export{}
let message = 'Helloo';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'code'

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Fe';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Ki', 12];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}

if(hasName(myVariable)) {
    console.log(myVariable.name)
}
(myVariable as string).toUpperCase;


let multiType: number | boolean;
multiType = 20;
multiType = true;