// SENZA SETINTERVAL

/* function printAsyncName(name, callback) {
  setTimeout(() => {
    callback();
    setTimeout(() => console.log(name), 1000);
  }, 1000);
} */

// CON SETINTERVAL

function printAsyncName(name, callback) {
  let id = setInterval(() => {
    callback();
    setTimeout(() => console.log(name), 1000);
    clearInterval(id);
  }, 1000);
  //setTimeout(() => clearInterval(id), 1000);
}

const sayHello = () => console.log("Hello");

printAsyncName("Mario", sayHello);
