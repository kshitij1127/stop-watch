class StopWatch {
  constructor() {
    this.startTime = null;
    this.endTime = null;
    this.duration = 0;
    this.started = false;
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.startTime = Date.now();
    } else {
      throw new Error("cannot call start . stop watch has already started");
    }
  }

  stop() {
    if (this.started) {
      this.started = false;
      this.endTime = Date.now();
      this.duration = this.endTime - this.startTime;
    } else {
      throw new Error("cannot call stop . stop watch has not been started");
    }
  }

  reset() {
    this.startTime = null;
    this.endTime = null;
    this.duration = 0;
  }

  getDuration() {
    return this.duration / 1000;
  }
}
