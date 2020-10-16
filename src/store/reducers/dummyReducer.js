const { DUMMY_ASYNC } = require("../constants/dummyActionTypes");

import { handleActions } from 'redux-actions';

const initialState = null;
const dummyReducer = handleActions(
    {
        [DUMMY_ASYNC]: state => state + 1
    },
    initialState
)

export default dummyReducer;