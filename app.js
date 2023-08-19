// Observer Pattern
// Publisher and Observer are classes

class Publisher {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  publish(news) {
    this.observers.forEach((obs) => obs.update(news));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(news) {
    console.log(`Hey ${this.name}, News Update - ${news}`);
  }
}

const timesOfIndia = new Publisher();

const somraj = new Observer('somraj');
const souradip = new Observer('souradip');

timesOfIndia.subscribe(somraj);
timesOfIndia.subscribe(souradip);

timesOfIndia.publish('Headine for today - ' + new Date().toDateString());
