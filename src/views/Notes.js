import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => (
   <GridTemplate>
      {notes.map(({ title, content, created, id }) => (
         <Card
            id={id}
            cardType="notes"
            title={title}
            content={content}
            created={created}
            key={id}
         />
      ))}
   </GridTemplate>
);

Notes.propTypes = {
   notes: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         title: PropTypes.string.isRequired,
         content: PropTypes.string.isRequired,
         created: PropTypes.string.isRequired,
      }),
   ),
};

Notes.defaultProps = {
   notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
