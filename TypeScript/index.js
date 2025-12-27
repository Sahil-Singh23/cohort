"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    //you can add extra fields here
    department;
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    isLegal() {
        return this.age > 18;
    }
}
let person = new Manager("Sahil", 20, "accounts");
console.log(person.name);
console.log(person.isLegal());
//# sourceMappingURL=index.js.map