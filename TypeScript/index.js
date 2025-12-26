"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delayedCall(fn) {
    setTimeout(fn, 2000);
}
delayedCall(() => {
    console.log('Hello after 1 second');
});
//# sourceMappingURL=index.js.map