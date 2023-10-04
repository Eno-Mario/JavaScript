/* function uncompletedNotes(notes) {
  this.toDO = [];
  console.log(notes.forEach((element) => this.toDO.push(element.todos.filter((el) => el.done === false))))
  this.todo = [];
  for (let i = 0; i < toDO.length; i++) {
    this.todo = this.todo.concat(toDO[i])
  }
  console.log(this.todo);
} */



/* function uncompletedNotes1(notes) {
  return notes.forEach((notes) => {
    let incompleti = notes.todos.filter((todo) => todo.done === false);
    console.log(incompleti);
  });
}

function uncompletedNotes2(notes) {
  let toDO = [];
  notes.forEach(el) => {
    el.foreach (element) {
      if (el.done === false) {
        toDO.push(x)
      }
    }
  }
  return toDO
} */


function uncompletedNotes(notes) {
  const uncompleted = [];
  notes.forEach((note) => {
    const uncompletedTodos = note.todos.some((todo) => !todo.done);
    if (uncompletedTodos) {
      uncompleted.push(note);
    }
  });
  console.log(uncompleted);
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: false,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

uncompletedNotes(notes);
