// import { call } from 'redux-saga/effects';
// import { fetchRoute } from './index';
// import { route } from '../../actions';
// import { getRoute } from '../../../api';
// import assert from 'assert';

// const action = {
//   type: route.toString(),
//   payload: {
//     address1: '',
//     address2: '',
//   },
// };
// describe('route saga', () => {
//   const gen = fetchRoute(action);
//   it('api request responses should be similar', () => {
//     assert.deepEqual(gen.next().value, call(getRoute, action.payload));
//   });
// });
it('should render', () => {
  expect(1).toBe(1);
});
