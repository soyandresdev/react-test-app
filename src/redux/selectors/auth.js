import { createSelector } from 'reselect';

// Select state namespace
const selectState = (state) => state.auth;

// Get test state from the auth state
const selectTest = () => createSelector(selectState, (auth) => auth?.testState);

export default { selectTest };
