const username: string | number = "Diego";
const sum = (a: number, b: number) => {return a + b};

sum(1,2)

//class declaration example 1
class Person {

   age: number;
   lastName: string;

   constructor(age:number, lastName:string)
   {
     this.age = age;
     this.lastName = lastName;
   }
  }

  //Class declaration exmaple 2
class Car{

  constructor (public brand: string)
  {}

}

const Obj = new Person(15, 'Pinzon');
const Obj2 = new Car('honda');

Obj2.brand = 'Toyota';
