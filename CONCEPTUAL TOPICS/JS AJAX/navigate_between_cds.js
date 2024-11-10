function next() {
    // display the next CD, unless you are on the last CD
    if (i < len-1) {
      i++;
      displayCD(i);
    }
  }
  
  function previous() {
    // display the previous CD, unless you are on the first CD
    if (i > 0) {
      i--;
      displayCD(i);
    }
  }