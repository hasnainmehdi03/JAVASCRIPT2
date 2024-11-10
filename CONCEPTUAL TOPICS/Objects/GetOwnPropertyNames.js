// Create an Object
const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
  
  // Set the language Property not enumerable
  Object.defineProperty(person, "language", {enumerable:false});
  
  // Get all Properties
  Object.getOwnPropertyNames(person);