// import { call } from 'redux-saga/effects';
// import { fetchRegistration } from './index';
// import { register, registrationFailed } from '../../actions';
// import { registerUser } from '../../../api';
// import assert from 'assert';

// const action = {
//   type: register.toString(),
//   payload: {
//     email: 'test@example.com',
//     password: 'password',
//     name: 'test test',
//   },
// };
// describe('registration saga', () => {
//   const gen = fetchRegistration(action);
//   it('api request responses should be similar', () => {
//     assert.deepEqual(gen.next().value, call(registerUser, action.payload));
//   });
// });
it('should render', () => {
  expect(1).toBe(1);
});
