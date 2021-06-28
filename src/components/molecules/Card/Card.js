import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import LinkIcon from 'assets/icons/link.svg';

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
   background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
   position: relative;

   ${({ flex }) =>
      flex &&
      css`
         display: flex;
         flex-direction: column;
         justify-content: space-between;
      `};

   :first-of-type {
      z-index: 9999;
   }
`;

const DateInfo = styled(Paragraph)`
   font-weight: ${({ theme }) => theme.bold};
   font-size: ${({ theme }) => theme.fontSize.xs};
   margin: 0;
`;

const StyledHeading = styled(Heading)`
   margin: 0;
`;

const StyledAvatar = styled.img`
   width: 86px;
   height: 86px;
   border: 5px solid ${({ theme }) => theme.twitter};
   border-radius: 50px;
   position: absolute;
   right: 25px;
   top: 10px;
`;

const StyledLinkButton = styled.a`
   display: block;
   width: 47px;
   height: 47px;
   border-radius: 50px;
   background: white url(${LinkIcon}) no-repeat;
   background-size: 60%;
   background-position: 50%;
   position: absolute;
   right: 25px;
   transform: translateY(-95%);
`;

const Card = ({ cardType }) => (
   <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
         <StyledHeading>Hello Grzegorz</StyledHeading>
         <DateInfo>3 Days</DateInfo>
         {cardType === 'twitter' && (
            <StyledAvatar src="https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_400x400.png" />
         )}
         {cardType === 'article' && (
            <StyledLinkButton href="https://www.youtube.com/watch?v=jaQ8HyA33O0" />
         )}
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

Card.propTypes = {
   cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
   cardType: 'note',
};

export default Card;
