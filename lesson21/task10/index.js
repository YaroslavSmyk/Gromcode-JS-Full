export const finishFrom = () => {
  const form = document.querySelector('.login-form');
  const input = document.createElement('input');
  form.prepend(input)
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  const inp = document.querySelector('input[name = "password"]');
  inp.setAttribute('type', 'password');

}