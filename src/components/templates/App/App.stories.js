import React from 'react';
import { storiesOf } from '@storybook/react';
import { moduleName } from '@UI/Templates/-info';
import App from '.';

storiesOf(`${moduleName}/App`, module).add('Default', () => (
  <App>Content here is connected with redux store and router based.</App>
));
