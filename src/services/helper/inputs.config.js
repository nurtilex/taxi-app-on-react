const navbarInputs = [
  { name: 'Карта', link: 'map', id: 0 },
  { name: 'Профиль', link: 'profile', id: 1 },
  { name: 'Выйти', link: 'logout', id: 2 },
];

const loginInputs = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'mail@mail.ru',
    required: true,
    id: 0,
  },
  {
    label: 'Password',
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
    required: true,
    label: 'Email',
    placeholder: 'mail@mail.ru',
    required: true,
    id: 0,
  },
  {
    text: 'Как вас зовут?',
    type: 'text',
    name: 'name',
    required: true,
    label: 'Как вас зовут?',
    placeholder: 'Петр Александрович',
    required: true,
    id: 1,
  },
  {
    text: 'Придумайте пароль*',
    type: 'password',
    name: 'password',
    required: true,
    label: 'Придумайте пароль',
    placeholder: '*************',
    required: true,
    id: 3,
  },
];
const profileInputs = [
  {
    label: 'Имя владельца',
    type: 'name',
    name: 'cardName',
    placeholder: '',
    required: true,
    id: 0,
  },
  {
    label: 'Номер карты',
    type: 'number',
    name: 'cardNumber',
    placeholder: '',
    required: true,
    id: 1,
  },
  {
    label: 'MM/YY',
    type: 'number',
    name: 'expiryDate',
    placeholder: '',
    required: true,
    id: 2,
  },
  {
    label: 'CVC',
    type: 'number',
    name: 'cvc',
    placeholder: '',
    required: true,
    id: 3,
  },
];

export { navbarInputs, loginInputs, registrationInputs, profileInputs };
