export const finishList = () => {
  const li1 = document.createElement('li');
  li1.textContent = 1;
  const li4 = document.createElement('li');
  li4.textContent = 4;
  const li6 = document.createElement('li');
  li6.textContent = 6;
  const li8 = document.createElement('li');
  li8.textContent = 8;

  const ul = document.querySelector('list');

  ul.prepend(li1);
  ul.append(li8);

  const special = document.querySelector('special');
  special.before(li4);
  special.after(li8);
};
