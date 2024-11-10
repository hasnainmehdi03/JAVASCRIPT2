class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      // date = new Date();  // This will not work
      const date = new Date(); // This will work
      return date.getFullYear() - this.year;
    }
  }
  