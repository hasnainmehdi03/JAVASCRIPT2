const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a method:
  document.getElementById("demo").innerHTML = person.fullName();