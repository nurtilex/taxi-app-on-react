import { put, call, takeEvery } from 'redux-saga/effects';
import { getAddressesList } from '@api';
import { addressesList } from '@store/actions';
import { layoutActions } from '@store/slices/layout';

export function* fetchAddresses() {
  try {
    const { addresses } = yield call(getAddressesList);
    const mappedAddresses = addresses.map((address, i) => ({
      id: i,
      value: address,
    }));
    yield put(layoutActions.setAddresses(mappedAddresses));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchAddressesListAction() {
  yield takeEvery(addressesList.toString(), fetchAddresses);
}

export default watchAddressesListAction;
