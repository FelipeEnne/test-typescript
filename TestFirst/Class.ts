export{}
class Employee {
    public employeeName: string;
    // private employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Felipe');
console.log(emp1.employeeName);
emp1.greet()


class Maneger extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Maneger('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);