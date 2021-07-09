import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import LinkIcon from 'assets/icons/link.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

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
   border: 5px solid ${({ theme }) => theme.twitters};
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

class Card extends React.Component {
   state = {
      redirect: false,
   };

   handleCardClick = () => this.setState({ redirect: true });

   render() {
      const { id, pageContext, title, created, twitterName, articleUrl, content, removeItem } =
         this.props;
      const { redirect } = this.state;

      if (redirect) {
         return <Redirect to={`${pageContext}/${id}`} />;
      }
      return (
         <StyledWrapper>
            <InnerWrapper onClick={this.handleCardClick} activeColor={pageContext}>
               <StyledHeading>{title}</StyledHeading>
               <DateInfo>{created}</DateInfo>
               {pageContext === 'twitters' && (
                  <StyledAvatar src={`https://twitter.com/${twitterName}/photo`} />
               )}
               {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
            </InnerWrapper>
            <InnerWrapper flex>
               <Paragraph>{content}</Paragraph>

               <Button onClick={() => removeItem(pageContext, id)} secondary>
                  REMOVE
               </Button>
            </InnerWrapper>
         </StyledWrapper>
      );
   }
}

Card.propTypes = {
   id: PropTypes.string.isRequired,
   pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
   title: PropTypes.string.isRequired,
   twitterName: PropTypes.string,
   articleUrl: PropTypes.string,
   content: PropTypes.string.isRequired,
   removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
   pageContext: 'notes',
   articleUrl: '',
   twitterName: '',
};

const mapDispatchToProps = (dispatch) => ({
   removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
