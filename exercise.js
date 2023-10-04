function repeatHello(callback) {
    setInterval(callback, 1000)
}

const printHello = () => console.log("hello");

repeatHello(printHello)


//Arrow functions are often used for callback functions in scenarios like this because they have a lexical this binding. 
//This means that the this value inside the arrow function is determined by the surrounding context (lexical scope) and is not affected by how the function is called. 