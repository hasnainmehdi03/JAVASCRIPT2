class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  const myCar = new Car("Ford");
  document.getElementById("demo").innerHTML = Car.hello(myCar);