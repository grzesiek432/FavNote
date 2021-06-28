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

const Card = ({ cardType, title, created, content, articleUrl, twitterName }) => (
   <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
         <StyledHeading>{title}</StyledHeading>
         <DateInfo>{created}</DateInfo>
         {cardType === 'twitter' && (
            <StyledAvatar src={`https://twitter.com/${twitterName}/photo`} />
         )}
         {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
         <Paragraph>{content}</Paragraph>
         <Button secondary>REMOVE</Button>
      </InnerWrapper>
   </StyledWrapper>
);

Card.propTypes = {
   cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
   title: PropTypes.string.isRequired,
   created: PropTypes.string.isRequired,
   twitterName: PropTypes.string,
   articleUrl: PropTypes.string,
   content: PropTypes.string.isRequired,
};

Card.defaultProps = {
   cardType: 'note',
   articleUrl: '',
   twitterName: '',
};

export default Card;
