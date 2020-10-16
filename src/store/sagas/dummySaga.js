import { put } from 'redux-saga/effects';
import { dummyActionAsync } from '../actions/dummyAction';

export default function* dummySaga() {
    yield put(dummyActionAsync());
}