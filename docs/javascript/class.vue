<script setup lang="js">
// 父类
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old`);
  }
}
// 子类student
class Student extends People {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }
}
// 子类teacher
class Teacher extends People {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }
}

const people = new People('Jack', 25);
people.sayHi();

const student = new Student('Tom', 18, 'MIT');
student.sayHi();
student.study();

const student2 = new Student.prototype.constructor('Lily', 20, 'Havard');
student2.sayHi();
student2.study();

const teacher = new Teacher('Jerry', 30, 'Math');
teacher.sayHi();
teacher.teach();


student instanceof Student; // true
student instanceof People; // true
student instanceof Object; // true

// 隐式原型 __proto__
// 显式原型 prototype
console.log(student.__proto__, 'student.__proto__'); // People { constructor: class Student, study: f }
console.log(Student.prototype, 'Student.prototype'); // People { constructor: class Teacher, study: f }
console.log(student.__proto__ === Student.prototype); // true
// student的隐式原型指向Student的显式原型

console.log(Student.prototype.__proto__, 'Student.prototype.__proto__'); // { constructor: class People, sayHi: f }
console.log(People.prototype, 'People.prototype'); // { constructor: class People, sayHi: f }
console.log(Student.prototype.__proto__ === People.prototype, People.prototype === people.__proto__); // true

console.log(People.prototype.__proto__, 'People.prototype.__proto__'); // { constructor: class Object }
console.log(Object.prototype, 'Object.prototype'); // { constructor: class Object }
console.log(People.prototype.__proto__ === Object.prototype); // true

console.log(Object.prototype.__proto__, 'Object.prototype.__proto__'); // null


</script>
<template></template>
