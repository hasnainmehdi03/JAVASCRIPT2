function displayCD(i) {
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
  }