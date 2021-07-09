import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';

class Notes extends React.Component {
   componentDidMount() {
      const { fetchNotes } = this.props;
      fetchNotes();
   }

   render() {
      const { notes } = this.props;
      return (
         <GridTemplate>
            {notes.map(({ title, content, created, _id }) => (
               <Card
                  id={_id}
                  cardType="notes"
                  title={title}
                  content={content}
                  created={created}
                  key={_id}
               />
            ))}
         </GridTemplate>
      );
   }
}

Notes.propTypes = {
   notes: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.number.isRequired,
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

const mapDispatchToProps = (dispatch) => ({
   fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
