const user = {
  firstName: 'Yaros',
  lastName: 'Smyk',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};
console.log(user.fullName);

console.log(user.fullName= 'Nastya Socho')
