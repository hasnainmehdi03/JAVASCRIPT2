//The keyword async before a function makes the function return a promise:
async function myFunction() {
    return "Hello";
  }
  //Is the same as:
  
  function myFunction() {
    return Promise.resolve("Hello");
  }
  //Here is how to use the Promise:
  
  myFunction().then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );