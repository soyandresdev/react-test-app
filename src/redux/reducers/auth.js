import { createReducer } from 'reduxsauce';

import { AuthActions } from '@Redux/actions';

// the initial state of this reducer
export const INITIAL_STATE = {
  testState: {
    changed: true,
  },
};

// test state change [an example for a reducer function]
export const changeTest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    testState: {
      ...state.testState,
      changed: action.changed,
    },
  };
};

// map action types to the reducer functions
export const HANDLERS = {
  [AuthActions.Types.CHANGE_TEST]: changeTest,
};

export default createReducer(INITIAL_STATE, HANDLERS);
