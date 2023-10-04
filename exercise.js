function multiplyByTwo(value) {
  let number = 2;
  function inner () {
    return number * value
  }
  return inner
}

console.log(multiplyByTwo(4)())