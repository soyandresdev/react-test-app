import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <Container>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </Container>
  );
};

export default NotFoundPage;
