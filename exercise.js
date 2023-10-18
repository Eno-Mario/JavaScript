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

saveLocal(user);
