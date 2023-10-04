const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

/* perché facendo const person2 = person1 non crea una copia ma puntano entrambi sullo stesso oggetto.
qundi è come se l'oggetto avesse due nomi person1 e person2.
per creare una vera o propria copia/clone dell'oggetto person1 in person2
possiamo fare cosi: const person2 = Object.assign({}, person1);
 */

console.log(person1);
console.log(person2);
