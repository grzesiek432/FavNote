import React from 'react';
import { addDecorator } from '@storybook/react';
import { makeDecorator } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

const withTheme = (storyFn) => {
   return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
};

const myThemed = makeDecorator({
   name: 'my-theme',
   wrapper: withTheme,
});

addDecorator(withTheme);
export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};
