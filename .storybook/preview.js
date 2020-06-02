import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeWrapper from '../src/styles';

addDecorator((story) => <ThemeWrapper>{story()}</ThemeWrapper>);
