"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (user) => {
    console.log('hello ' + user);
};
greet("Sahil");
const sum = (a, b) => {
    return a + b;
};
const isLegal = (age) => {
    return age >= 18 ? true : false;
};
let ans = sum(1, 2);
console.log(ans);
console.log(isLegal(18));
//number,string,any
//# sourceMappingURL=index.js.map