// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("Event1", (data) => {
//   console.log(data);
// });

// myEmitter.emit(
//   "Event1",
//   "Hello there...This is the first event getting emitted."
// );

//Leetcode Problem - 2694

class EventEmitter {
  eventMap = {};

  subscribe(event, cb) {
    if (!this.eventMap[event]) {
      this.eventMap[event] = new Set();
    }
    this.eventMap[event].add(cb);

    return {
      unsubscribe: () => {
        this.eventMap[event].delete(cb);
      },
    };
  }

  emit(event, args = []) {
    const res = [];
    (this.eventMap[event] ?? []).forEach((cb) => res.push(cb(...args)));
    return res
  }
}
