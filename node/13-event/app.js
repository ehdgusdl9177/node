const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback - ", args);
};

emitter.on("ellie", callback1);

emitter.on("ellie", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
emitter.removeAllListeners();
// emitter.removeListener("ellie", callback1);
emitter.emit("ellie", { message: 3 });
