export const createButton = buttonText => {
  const create = document.createElement('button');
  create.textContent = buttonText;
  const body = document.querySelector('body');
  body.append(create);
};
