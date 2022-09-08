'use strict';

// // CONSTRUCTOR FUNCTION
// const Person = function (firstName, birthYear) {
//   // console.log(this);//Person {} devuelve siempre el objeto
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Nunca crear métodos dentro un constructor, porque realizaría miles de copias de la misma función
//   // this.calcAge =  function () {
//   //   console.log(2022 - this.birthYear);
//   // }
// };

// const joaquin = new Person('Joaquín', 1997);
// // console.log(joaquin); // Person { firstName: 'Joaquín', birthYear: 1997 }
// // 1. New {} is created.
// // 2. function is called, this = {}.
// // 3. linked to prototype.
// // 4. function automatically return {}
// // console.log(joaquin instanceof Person);//true

// // PROTOTYPES
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// joaquin.calcAge(); //25
// // console.log(joaquin.__proto__ === Person.prototype); // true
// // console.log(Person.prototype.isPrototypeOf(joaquin)); //true

// // Estas no son propiedades directas de constructor
// Person.prototype.species = 'Homo Sapiens';
// // console.log(joaquin.species); //Homo Sapiens
// // console.log(joaquin.hasOwnProperty('firstName')); //true
// // console.log(joaquin.hasOwnProperty('species')); //false

// // PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
// console.log(joaquin.__proto__.__proto__); //Este es Object.prototype

// const arr = [3, 6, 6, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__); //todos los métodos de los array
// console.log(arr.__proto__ === Array.prototype); // true

// // Podemos agregar un nuevo método con Array.prototype
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); // [3, 6, 5, 9]

// // CODING CHALLENGE 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed}km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);
// console.log(bmw);
// console.log(mercedes);
// console.log(bmw.accelerate());
// console.log(bmw.accelerate());
// console.log(bmw.accelerate());
// console.log(bmw.brake());

// // ES6 CLASSES
// // Class expresion
// // const PersonCl = class {}

// // Class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // agregamos los métodos por fuera del constructor, estos se agregan al prototype de la clase PersonCl en este caso
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hola ${this.firstName}`);
//   }
// }

// const alumine = new PersonCl('Alumine', 2000);
// console.log(alumine);
// alumine.calcAge(); // 22
// console.log(alumine.__proto__ === PersonCl.prototype); // true
// alumine.greet();// Hola Alumine
// // 1. Classes are NOT hoisted (no se pueden usar antes de inicializarse);
// // 2. Classes are first-class citizes, podemos pasarlas dentro de funciones y también retornarlas desde funciones.
// // 3. Classes are executed in strict mode.

// // SETTERS and GETTERS
// const account = {
//   owner: 'Joaquin',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };
// // get
// console.log(account.latest); // 300
// // set
// account.latest = 50;
// console.log(account.movements); // [200, 530, 120, 300, 50]

// // STATIC METHODS
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log('Hey there!');
//   // console.log(this); //Person
// };
// Person.hey(); //static method

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // static method
//   static hey() {
//     console.log('Hey there!');
//   }
// }
// PersonCl.hey()

// // OBJECT.CREATE
// // Este objeto es el prototype
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// // console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1997;
// steven.calcAge();
// // console.log(steven.__proto__ === PersonProto);// true
// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 2000);
// sarah.calcAge();

// // CODING CHALLENGE 2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.speed}km/h`);
//   }

//   get speedUS () {
//     const speedInMl = this.speed / 1.6;
//     return speedInMl;
//   }

//   set speedUS (speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('FORD', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTION
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Esta conexión hay que hacerla antes de agregar métodos porque esta líne de código genera un objeto vacío,
//por lo que borraría el método que hayamos creado.
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1997, 'Computer Science');
mike.introduce(); //My name is Mike and I study Computer Science
// Ahora gracias a la linea Student.prototype = Object.create(Person.prototype) podemos acceder al siguiente método:
mike.calcAge(); //25

// console.log(mike.__proto__); //el prototype de student
// console.log(mike.__proto__.__proto__); //el prototype de Person

Student.prototype.constructor = Student;
// console.log(mike instanceof Student); //true
// console.log(mike instanceof Person); //true
// console.log(mike instanceof Object); //true

// // CODING CHALLENGE 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//   return this.charge = chargeTo;
// }

// EV.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
// }

// const tesla = new EV("Tesla", 120, 23)
// tesla.accelerate();
// tesla.chargeBattery(50);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();

// // INHERITANCE BETWEEN "CLASSES": ES6 CLASSES
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there!');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I'm studying ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I'm ${2022 - this.birthYear} years old`);
//   }
// }

// const franco = new StudentCl('Franco DiStefano', 1997, 'Mecánico Dental');
// console.log(franco);
// franco.introduce();
// franco.calcAge();

// // INHERITANCE BETWEEN CLASSES: OBJECT.CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function() {
//   console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
// }

// const matias = Object.create(StudentProto);
// matias.init("Matías", 1998, "Inspector de billeteras");
// matias.introduce();
// matias.calcAge();

// ANOTHER CLASS EXAMPLE
class Account {
  // Public fields
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approve');
      return this;
    }
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Matías', 'ARG', 6666);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());

//Esto me da error porque es privado:
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(500));

// CHAINING METHODS
acc1.deposit(500).deposit(300).withdraw(400).requestLoan(4000).withdraw(1500);
console.log(acc1.getMovements());

// CODING CHALLENGE 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.speed}km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);


rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate().brake();
