import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input';

const Root = () => (
   <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
         <>
            <h1>Hello World</h1>
            <Button>Close/Save</Button>
            <Button secondary>Remove</Button>
            <Input placeholder="search" search></Input>
         </>
      </ThemeProvider>
   </div>
);

export default Root;
