import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitters }) => (
   <GridTemplate pageType="twitters">
      {twitters.map((item) => (
         <Card
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

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
