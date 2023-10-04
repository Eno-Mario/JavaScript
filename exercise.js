const isLogged = true;

const checkIfLogged = new Promise((resolve, reject) =>{
    if (isLogged) {
        resolve(Math.random())
    } else {
        reject("Not Logged")
    }
});

const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
    if (number > 0.5) {
        resolve({name: "John", age: 24})
    } else {
        reject("its to Low")
    }
})};

checkIfLogged
    .then((num) => checkNumber(num))
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
