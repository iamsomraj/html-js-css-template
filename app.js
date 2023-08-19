class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.data = null;
    Database.instance = this;
  }

  setData(value) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}

const db1 = new Database();
const db2 = new Database();

db1.setData('somraj');
const data = db2.getData();
console.log(data); // somraj
console.log(db1 === db2); // true
