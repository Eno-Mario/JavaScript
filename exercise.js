//Funzione con For normale.
function adultFilter1(persons) {
  let adults = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      adults.push(persons[i]);
    }
  }
  return adults;
}

//funzione con for each
function adultFilter2(persons) {
  let adults = [];
  persons.forEach((element) => {
    if (element.age >= 18) {
      adults.push(element);
    }
  });
  return adults;
}

// Arrow Function tramite filter
function adultFilter3(persons) {
  let adults3 = persons.filter((el) => el.age >= 18);
  return adults3;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

//Funzione con For normale.

console.log(adultFilter1(persons));

//funzione con for each

console.log(adultFilter2(persons));

// Arrow Function tramite filter

console.log(adultFilter3(persons));
// const adults = adultFilter(persons);
// console.log(persons);
// console.log(adults);
