import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';

const Twitters = ({ twitters }) => (
   <GridTemplate>
      {twitters.map((item) => (
         <Card
            id={item.id}
            cardType="twitters"
            title={item.title}
            content={item.content}
            created={item.created}
            twitterName={item.twitter}
            key={item.title}
         />
      ))}
   </GridTemplate>
);

Twitters.propTypes = {
   twitters: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         title: PropTypes.string.isRequired,
         content: PropTypes.string.isRequired,
         twitterName: PropTypes.string.isRequired,
         created: PropTypes.string.isRequired,
      }),
   ),
};

Twitters.defaultProps = {
   twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
