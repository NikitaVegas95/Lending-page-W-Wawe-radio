//маска номера

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

//валидатор

const validate = new window.JustValidate('form', {
  errorLabelStyle: {
    color: 'var(--btn-color)',
  }
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
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'не менее 10-ти цифр',
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

