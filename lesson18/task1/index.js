const event = {
  guests: [
    {
      name: 'John',
      age: 18,
      email: 'example@server.com',
    }
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        message: `Dear ${name}! ${this.message}`,
        email
      }));
  }
}



console.log(event.getInvintations());
