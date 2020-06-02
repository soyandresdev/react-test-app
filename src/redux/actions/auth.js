import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    changeTest: ['changed'],
  },
  { prefix: 'Auth/' }
);

export default {
  Creators,
  Types,
};
