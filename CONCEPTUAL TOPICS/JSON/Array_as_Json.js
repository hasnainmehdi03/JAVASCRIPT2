const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myArr[0];
  }
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();
