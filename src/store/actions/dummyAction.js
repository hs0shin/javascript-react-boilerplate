import { createAction, handleActions } from 'redux-actions';
import { DUMMY_ASYNC} from '../constants/dummyActionTypes';

export const dummyActionAsync = createAction(DUMMY_ASYNC, () => undefined);



