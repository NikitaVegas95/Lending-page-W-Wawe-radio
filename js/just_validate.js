//валидатор

const validate = new window.JustValidate('#form', {
  errorLabelStyle: {
    color: 'red',
  },
});

validate.addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя не может быть менее 2х символов',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email введен некорректно',
    },
  ]);

