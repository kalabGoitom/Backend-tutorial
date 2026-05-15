// import sayhi from "./utilities.js";
// import { john, peter } from "./variable.js";
// // sayhi(john);
// sayhi(peter);

const names = require("./variable.js");
const sayhi = require("./utilities.js");
sayhi(names.john);
sayhi(names.peter);

import { item, person } from "./mul.js";

const mul = require("./mul.js");
console.log(mul.item);
console.log(mul.singlePerson);
