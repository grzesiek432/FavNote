import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => (
   <GridTemplate pageType="articles">
      {articles.map((item) => (
         <Card
            id={item.id}
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

Articles.propTypes = {
   articles: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         title: PropTypes.string.isRequired,
         content: PropTypes.string.isRequired,
         articleUrl: PropTypes.string.isRequired,
         created: PropTypes.string.isRequired,
      }),
   ),
};

Articles.defaultProps = {
   articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
