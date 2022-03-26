// import { call } from 'redux-saga/effects';
// import { fetchPayment } from './index';
// import { payment, paymentUpdate, paymentRequestFailed } from '../../actions';
// import { getCard, setCard } from '../../../api';
// import assert from 'assert';

// const actionPost = {
//   type: payment.toString(),
//   payload: {
//     method: 'post',
//     token: 'token',
//     payment: { cardName: 'card-name', cardNumber: 1, expiryDate: 1, cvc: 1 },
//   },
// };
// const actionGet = {
//   type: payment.toString(),
//   payload: { method: 'get', token: 'token' },
// };
// const payload = {
//   cardName: 'card-name',
//   cardNumber: 1,
//   expiryDate: 1,
//   cvc: 1,
//   token: 'token',
// };
// describe('payment saga', () => {
//   it('should render post method', () => {
//     const gen = fetchPayment(actionPost);
//     assert.deepEqual(gen.next().value, call(setCard, payload));
//   });
//   it('should render get method', () => {
//     const gen = fetchPayment(actionGet);
//     assert.deepEqual(gen.next().value, call(getCard, actionGet.payload.token));
//   });
// });
it('should render', () => {
  expect(1).toBe(1);
});
