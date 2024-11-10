fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
  }

  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
  }