const baseUrl = 'https://626c06265267c14d566b9473.mockapi.io/api/v1/users';

const btn = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');

const onValid = () => {
  form.reportValidity() ? (btn.disabled = false) : (btn.disabled = true);
};

form.addEventListener('input', onValid);

const postSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(form));
  console.log(formData);
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(result => result.json())
    .then(resBody => {
      console.log(resBody);
      alert(JSON.stringify(resBody));
      form.reset();
    });
};

form.addEventListener('submit', postSubmit);

// 1 подписаться на (click) Register.
// 2 отпралять данные POST на сервер
// 3 ответ вывести в Алерт как объект
// 4 Очистить поля
// 5 Register не активна если хоть одно поле не валидно
