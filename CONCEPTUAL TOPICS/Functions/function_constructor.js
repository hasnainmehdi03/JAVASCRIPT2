// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  // This creates a new object
  const myObj = new myFunction("John", "Doe");
  
  // This will return "John"
  myObj.firstName;