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
   children: PropTypes.element.isRequired,
   pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
   pageType: 'note',
};

export default UserPageTemplate;
