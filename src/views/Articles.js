import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
   <GridTemplate pageType="articles">
      {articles.map((item) => (
         <Card
            cardType="articles"
            title={item.title}
            content={item.content}
            created={item.created}
            articleUrl={item.articleUrl}
            key={item.title}
         />
      ))}
   </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
