const navbarInputs = [
  { name: 'Карта', link: 'map', id: 0 },
  { name: 'Профиль', link: 'profile', id: 1 },
  { name: 'Выйти', link: 'logout', id: 2 },
];

const loginInputs = [
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
];

const registrationInputs = [
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
];
const profileInputs = [
  {
    text: 'Имя владельца',
    type: 'name',
    name: 'cardName',
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
    name: 'expiryDate',
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
];

export { navbarInputs, loginInputs, registrationInputs, profileInputs };
