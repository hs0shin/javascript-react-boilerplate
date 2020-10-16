import { all } from 'redux-saga/effects';
import dummySaga from './dummySaga';

export default function* rootSaga() {
    yield all([dummySaga()]);
}