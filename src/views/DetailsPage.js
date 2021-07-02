import React from 'react';
/* eslint-disable */
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
import PropTypes from 'prop-types';

class DetailsPage extends React.Component {
   render() {
      const dummyArticle = {
         id: 1,
         title: 'Wake me up when Vue ends',
         content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
         twitterName: 'hello_roman',
         articleUrl: 'https://youtube.com/helloroman',
         created: '1 day',
      };
      const { match } = this.props;
      return (
         <DetailsTemplate
            title={dummyArticle.title}
            content={dummyArticle.content}
            created={dummyArticle.created}
            articleUrl={dummyArticle.articleUrl}
            twitterName={dummyArticle.twitterName}
         ></DetailsTemplate>
      );
   }
}

DetailsPage.propTypes = {
   match: PropTypes.object.isRequired,
};

export default DetailsPage;
