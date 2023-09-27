/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
} */

function sum(...rest) {
  return rest.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5));