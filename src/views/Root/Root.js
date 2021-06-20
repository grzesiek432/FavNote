import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/Global';

const theme = {
   primary: 'black',
};

const Root = () => (
   <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
         <>
            <h1>Hello World</h1>
            <Button>Close/Save</Button>
            <Button secondary>Remove</Button>
         </>
      </ThemeProvider>
   </div>
);

export default Root;
