import axios from 'axios';

const { post, get } = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
  responseType: 'json',
});

// props example - {email: "email@example.com", password: "password", name: "Name", surname: "Surname"}
export const registerUser = async (props) => {
  console.log('🚀 ~ file: index.js ~ line 10 ~ registerUser ~ props', props);

  const { data } = await post('/register', props);
  return data;
};

// props example - {email: "email@example.com", password: "password"}
export const authUser = async (props) => {
  const { data } = await post('/auth', props);
  return data;
};

// props example - {cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}
export const setCard = async (props) => {
  const { data } = await post('/card', props);
  return data;
};

// GET methods
export const getAddressesList = async () => {
  try {
    const { data } = await get('/addressList');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCard = async (token) => {
  try {
    const { data } = await get(`/card?token=${token}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRoute = async (params) => {
  try {
    const { data } = await get('/route', { params });
    return data;
  } catch (error) {
    console.log(error);
  }
};
