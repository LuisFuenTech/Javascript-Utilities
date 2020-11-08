const Timer = require("./index");
const processTimer = new Timer();

console.log("Start, it should take 5 seconds...");
processTimer.start();

setTimeout(() => {
  processTimer.finish();
}, 5000);
