const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;