import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';

class Articles extends React.Component {
   componentDidMount() {
      const { fetchArticles } = this.props;
      fetchArticles();
   }

   render() {
      const { articles } = this.props;
      return (
         <GridTemplate>
            {articles.map((item) => (
               <Card
                  id={item._id}
                  cardType="articles"
                  title={item.title}
                  content={item.content}
                  created={item.created}
                  articleUrl={item.articleUrl}
                  key={item._id}
               />
            ))}
         </GridTemplate>
      );
   }
}
Articles.propTypes = {
   articles: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.number.isRequired,
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

const mapDispatchToProps = (dispatch) => ({
   fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
