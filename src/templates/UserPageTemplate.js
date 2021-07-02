import React from 'react';
import SideBar from 'components/organisms/SideBar/SideBar';
import PropTypes from 'prop-types';

const UserPageTemplate = ({ children }) => (
   <>
      <SideBar />
      {children}
   </>
);

UserPageTemplate.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
