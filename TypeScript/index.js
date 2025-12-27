"use strict";
// //object as input
// interface Address{
//     city: String,
//     pin: number
// }
// interface User{
//     name:String,
//     age:number,
//     address?:Address,
//     isLegal: () => boolean,
// }
// class Manager implements User{
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(users) {
    const legals = new Array();
    for (const user of users) {
        if (user.age >= 18)
            legals.push(user);
    }
    return legals;
}
const users = [{
        firstname: "Sahil",
        lastname: "Singh",
        age: 20
    }, {
        firstname: "Sneha",
        lastname: "Singh",
        age: 20
    }, {
        firstname: "Jagat",
        lastname: "Singh",
        age: 40
    }, {
        firstname: "Mika",
        lastname: "Singh",
        age: 14
    }];
console.log(isLegal(users));
//# sourceMappingURL=index.js.map