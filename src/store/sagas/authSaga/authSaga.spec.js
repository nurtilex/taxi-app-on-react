import { put, call } from 'redux-saga/effects';
import { fetchAuth } from './index';
import { login, requestFailed } from '../../actions';
import { authUser } from '../../../api';
import assert from 'assert';
// const assert = require('assert');
const action = {
  type: 'AUTHENTICATE',
  payload: { email: 'test@test.com', password: '123123' },
};
describe('auth saga', () => {
  const gen = fetchAuth(action);
  it('api request responses should be similar', () => {
    assert.deepEqual(gen.next().value, call(authUser, action.payload));
  });
});
