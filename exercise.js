const number = 15;
const newPromise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("Resolved");
    } else {
        reject("Rejected")
    }
});

newPromise
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))