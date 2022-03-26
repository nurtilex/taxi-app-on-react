import { put, call, takeEvery } from 'redux-saga/effects';
import { getAddressesList } from '../../../api';
import { addressesList, addressesRequestSucceeded } from '../../actions';

export function* fetchAddresses() {
  try {
    const { addresses } = yield call(getAddressesList);
    const mappedList = addresses.map((address, i) => ({
      id: i,
      value: address,
    }));
    yield put(addressesRequestSucceeded(mappedList));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchAddressesListAction() {
  yield takeEvery(addressesList.toString(), fetchAddresses);
}

export default watchAddressesListAction;
