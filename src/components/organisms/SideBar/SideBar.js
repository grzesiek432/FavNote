import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.nav`
   position: fixed;
   left: 0;
   top: 0;
   width: 150px;
   height: 100vh;
   background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

const StyledLinksList = styled.ul`
   padding: 0;
   margin: 0;
   list-style: none;
`;

const StyledLogoLink = styled(NavLink)`
   display: block;
   width: 67px;
   height: 67px;
   background-image: url(${logoIcon});
   background-repeat: no-repeat;
   background-position: 50% 50%;
   background-size: 80%;
   border: none;
   margin-bottom: 10vh;
`;

const StyledLogoutIcon = styled(ButtonIcon)`
   margin-top: auto;
`;

const SideBar = ({ pageContext }) => (
   <StyledWrapper activeColor={pageContext}>
      <StyledLogoLink to="/" />
      <StyledLinksList>
         <li>
            <ButtonIcon exact as={NavLink} to="/notes" icon={penIcon} />
         </li>

         <li>
            <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
         </li>
         <li>
            <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
         </li>
      </StyledLinksList>
      <StyledLogoutIcon as={NavLink} to="/login" icon={logoutIcon} />
   </StyledWrapper>
);

SideBar.propTypes = {
   pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

SideBar.defaultProps = {
   pageContext: 'notes',
};

export default withContext(SideBar);
