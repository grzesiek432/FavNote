import React from 'react';
import SideBar from 'components/organisms/SideBar/SideBar';
import PropTypes from 'prop-types';

const UserPageTemplate = ({ children, pageType }) => (
   <>
      <SideBar pageType={pageType} />
      {children}
   </>
);

UserPageTemplate.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
   pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
   pageType: 'notes',
};

export default UserPageTemplate;
