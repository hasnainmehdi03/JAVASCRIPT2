xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    let text = "";
    for (let x in myObj) {
      text += myObj[x].name + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }