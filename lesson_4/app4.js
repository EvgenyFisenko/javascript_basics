"use strict";

function num2Obj(num) {
    if (!Number.isInteger(num)) {
        console.log("not integer");
        return {};
    }
    if (num > 999 || num < 0) {
        console.log("out of range");
        return {};
    }

    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100)
    };
}

console.log(num2Obj(987));
