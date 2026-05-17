const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data received from ${name}, age ${age}`);
});

customEmitter.on("response", (name) => {
  console.log(`data sent back to ${name}`);
});

customEmitter.on("response", () => {
  console.log(" sent back");
});

customEmitter.on("response", () => {
  console.log("data  back");
});

customEmitter.emit("response", "kalab", 34);
const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data received from ${name}, age ${age}`);
});

customEmitter.on("response", (name) => {
  console.log(`data sent back to ${name}`);
});

customEmitter.on("response", () => {
  console.log(" sent back");
});

customEmitter.on("response", () => {
  console.log("data  back");
});

customEmitter.emit("response", "kalab", 34);
