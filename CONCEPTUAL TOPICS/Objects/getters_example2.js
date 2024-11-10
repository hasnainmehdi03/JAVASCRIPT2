const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.fullName;