const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(getFullName) {
   let arr = getFullName.split(' ')
   this.firstName = arr[0]
   this.lastName = arr[1]

   console.log(arr)
   console.log(this.firstName)
   console.log(this.lastName)

  },
};

user.setFullName('adf dva')