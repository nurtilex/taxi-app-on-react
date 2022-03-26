import { put, call } from 'redux-saga/effects';
import { fetchAddresses } from './index';
import { addressesRequestSucceeded } from '../../actions';
import { getAddressesList } from '../../../api';

const assert = require('assert');

describe('addresses list saga', () => {
  const gen = fetchAddresses();
  it('api request responses should be similar', () => {
    assert.deepEqual(gen.next().value, call(getAddressesList));
  });
  it('should dispatch an action', () => {
    assert.deepEqual(
      gen.next(addressesRequestSucceeded()).value,
      put(addressesRequestSucceeded()).value
    );
  });
});
