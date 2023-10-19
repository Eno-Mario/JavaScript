const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocal(userObj) {
  try {
    localStorage.setItem("user", JSON.stringify(userObj));
  } catch (err) {
    console.error(err);
  }
}

function recoverLocal(key) {
  try {
    const local = localStorage.getItem(key);
    console.log(local);
  } catch (err) {
    console.error(err);
  }
}

saveLocal(user);

recoverLocal("user");
