export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    this.age = newAge;
    if (newAge >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    if (newAge < 0) {
      return false;
    }
    return newAge;
  }
  static createEmpty() {
    const user1 = { name: '', age: null };
    return user1;
  }
}
