"use strict";
var world = 'world';
function hello(who) {
    if (who === void 0) { who = world; }
    console.log(who);
    return "Hello ".concat(who, "! ");
}
