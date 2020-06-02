import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Button from '@UI/Atoms/Button';
import logo from '@Static/images/logo.svg';
import { AuthSelectors } from '@Redux/selectors';
import { AuthActions } from '@Redux/actions';
import { App as AppStyled, AppLogo, AppHeader, AppLink } from './styles';

const HomeTest = ({ testState, changeTest }) => (
  <AppStyled>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
    </AppHeader>
    <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </AppLink>
    <Button
      color="amnesiaBlue"
      onClick={() => {
        changeTest(!testState.changed);
      }}
    >
      Change State
    </Button>
    <p>Current State: {testState.changed.toString()}</p>
  </AppStyled>
);

HomeTest.propTypes = {
  testState: PropTypes.shape({ changed: PropTypes.bool }).isRequired,
  changeTest: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeTest: (changed) => dispatch(AuthActions.Creators.changeTest(changed)),
});

const mapStateToProps = createStructuredSelector({
  testState: AuthSelectors.selectTest(),
});

export default memo(compose(connect(mapStateToProps, mapDispatchToProps))(HomeTest));
