import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
   border-left: 5px solid ${({ activeColor, theme }) => theme[activeColor]};
   z-index: 9999;
   position: fixed;
   display: flex;
   flex-direction: column;
   padding: 100px 90px;
   right: 0;
   top: 0;
   height: 100vh;
   width: 680px;
   background-color: white;
   box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
   transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
   transition: transform 0.25s ease-in-out;
`;

const StyledInput = styled(Input)`
   margin-top: 30px;
`;

const StyledTextArea = styled(Input)`
   border: 20px;
   margin: 30px 0 100px;
   height: 30vh;
`;

const NewItemBar = ({ pageContext, isVisible }) => (
   <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <Heading big>Create new {pageContext}</Heading>
      <StyledInput
         placeholder={pageContext === 'twitters' ? 'Account Name eg. hello_roman' : 'title'}
      />
      {pageContext === 'articles' && <StyledInput placeholder="link" />}
      <StyledTextArea as="textarea" placeholder="Description" />
      <Button activeColor={pageContext}>Add note</Button>
   </StyledWrapper>
);

export default withContext(NewItemBar);
