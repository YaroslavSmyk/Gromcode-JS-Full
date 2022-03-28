let message = 'Just learn it!';

export function sendMessage(name) {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! You ${sender}`);
}
sendMessage('Ann');

export function setMessage(text) {
  message = text;
}
