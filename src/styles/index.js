import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import colors from '@Config/colors';
import GlobalStyle from './global-style';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={{ colors }}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
