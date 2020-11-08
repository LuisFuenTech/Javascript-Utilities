class Timer {
  constructor(params = {}) {
    this.message = params.message || "Time to be completed";
    this.startTime = 0;
  }

  start() {
    this.startTime = Date.now();
  }

  finish() {
    const endTimeInSeconds = (Date.now() - this.startTime) / 1000;

    this.getTime(endTimeInSeconds);
  }

  getTime(seconds) {
    const format = (val) => `0${Math.floor(val)}`.slice(-2);

    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;

    const time = [hours, minutes, seconds % 60].map(format).join(":");
    console.log(`${this.message}: ${time} ⏱`);
  }
}

module.exports = Timer;
