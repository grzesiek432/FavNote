import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';

class Twitters extends React.Component {
   componentDidMount() {
      const { fetchTwitters } = this.props;
      fetchTwitters();
   }

   render() {
      const { twitters } = this.props;

      return (
         <GridTemplate>
            {twitters.map((item) => (
               <Card
                  id={item._id}
                  cardType="twitters"
                  title={item.title}
                  content={item.content}
                  created={item.created}
                  twitterName={item.twitter}
                  key={item._id}
               />
            ))}
         </GridTemplate>
      );
   }
}

Twitters.propTypes = {
   twitters: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         content: PropTypes.string.isRequired,
         twitterName: PropTypes.string.isRequired,
      }),
   ),
};

Twitters.defaultProps = {
   twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
   fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
