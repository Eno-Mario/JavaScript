function printName() {
  let helloName = "Hello John";

  function inner() {
    return helloName;
  }
  setTimeout(() => console.log(inner()), 1000);
}

printName();
