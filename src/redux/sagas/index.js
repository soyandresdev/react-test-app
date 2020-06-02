import { all } from 'redux-saga/effects';
import AuthSagas from './auth';

export default function* rootSaga() {
  // Add the imported sagas to the all method array
  yield all([...AuthSagas]);
}
