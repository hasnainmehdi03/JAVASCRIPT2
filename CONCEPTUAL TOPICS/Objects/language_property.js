// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language.toUpperCase();
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang;
  