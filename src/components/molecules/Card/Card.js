import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
   box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
   border-radius: 10px;
   overflow: hidden;
   min-height: 385px;
   position: relative;
   display: grid;
   grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
   padding: 17px 30px;
   background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};

   ${({ flex }) =>
      flex &&
      css`
         display: flex;
         flex-direction: column;
         justify-content: space-between;
      `};
`;

const DateInfo = styled(Paragraph)`
   font-weight: ${({ theme }) => theme.bold};
   font-size: ${({ theme }) => theme.fontSize.xs};
   margin: 0 0 5px;
`;

const StyledHeading = styled(Heading)`
   margin: 5px 0 0;
`;

const Card = () => (
   <StyledWrapper>
      <InnerWrapper yellow>
         <StyledHeading>Hello Grzegorz</StyledHeading>
         <DateInfo>3 Days</DateInfo>
      </InnerWrapper>
      <InnerWrapper flex>
         <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
         </Paragraph>
         <Button secondary>REMOVE</Button>
      </InnerWrapper>
   </StyledWrapper>
);

export default Card;
