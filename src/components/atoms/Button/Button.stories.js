import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { moduleName } from '@UI/Atoms/-info';
import Button from '.';

export const actions = {
  onClick: action('onClick'),
};

storiesOf(`${moduleName}/Button`, module)
  .add('Default', () => (
    <Button type="button" {...actions}>
      Button
    </Button>
  ))
  .add('Colored', () => (
    <Button type="button" color="amnesiaBlue" {...actions}>
      Button
    </Button>
  ));
