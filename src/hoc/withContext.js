import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
   return function contextComponent(props) {
      return (
         <PageContext.Consumer>
            {/* eslint-disable react/jsx-props-no-spreading */}
            {(context) => <Component {...props} pageContext={context} />}
         </PageContext.Consumer>
      );
   };
};

export default withContext;
