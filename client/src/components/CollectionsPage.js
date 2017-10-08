import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCollections } from '../reducers/appReducer';
import Collection from './Collection';

class CollectionsPage extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
  	const { collections, books } = this.props;

    return (
      <div>
        {collections.map(col =>
          <Collection key={col._id} {...col} books={col.books.map(book => books[book])} />
        )}
      </div>
    )
  }
}

CollectionsPage.propTypes = {
  books: PropTypes.object.isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired).isRequired,
  fetchCollections: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    books: state.app.books,
    collections: Object.values(state.app.collections)
  }),
  { fetchCollections }
)(CollectionsPage);
