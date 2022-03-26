const inputsInitialState = {
  navbar: [
    { name: 'Карта', link: 'map', id: 0 },
    { name: 'Профиль', link: 'profile', id: 1 },
    { name: 'Выйти', link: 'login', id: 2 },
  ],
  login: [
    {
      text: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'mail@mail.ru',
      required: true,
      id: 0,
    },
    {
      text: 'Password',
      type: 'password',
      name: 'password',
      placeholder: '********',
      required: true,
      id: 1,
    },
  ],
  registration: [
    {
      text: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'mail@mail.ru',
      required: true,
      id: 0,
    },
    {
      text: 'Как вас зовут?',
      type: 'text',
      name: 'name',
      placeholder: 'Петр Александрович',
      required: true,
      id: 1,
    },
    {
      text: 'Придумайте пароль*',
      type: 'password',
      name: 'password',
      placeholder: '*************',
      required: true,
      id: 3,
    },
  ],
  profile: [
    {
      text: 'Имя владельца',
      type: 'name',
      name: 'name',
      placeholder: '',
      required: true,
      value: '',
      id: 0,
    },
    {
      text: 'Номер карты',
      type: 'number',
      name: 'cardNumber',
      placeholder: '',
      required: true,
      value: '',
      pattern: `[0-9]{12}`,
      id: 1,
    },
    {
      text: 'MM/YY',
      type: 'number',
      name: 'period',
      placeholder: '',
      required: true,
      value: '',
      pattern: `[0-9]{4}`,
      id: 2,
    },
    {
      text: 'CVC',
      type: 'number',
      name: 'cvc',
      placeholder: '',
      required: true,
      value: '',
      pattern: `[0-9]{3}`,
      id: 3,
    },
  ],
};

export default inputsInitialState;