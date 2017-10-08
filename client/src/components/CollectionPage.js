import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCollection, deleteBookFromCollection, updateBook } from '../reducers/appReducer';
import Collection from './Collection';
import CollectionBookList from './CollectionBookList';

class CollectionPage extends Component {
  componentDidMount() {
    this.props.fetchCollection({ id: this.props.params.id });
  }

  render() {
  	const { collection, books, deleteBookFromCollection, updateBook } = this.props;

    if (collection) {
      const collectionBooks = collection.books.map((book) => books[book]).filter((b) => b);

      return (
        <div>
          <Collection key={collection._id} {...collection} />
          <CollectionBookList
            books={collectionBooks}
            collection={collection}
            deleteBookFromCollection={deleteBookFromCollection}
            updateBook={updateBook}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

CollectionPage.propTypes = {
  books: PropTypes.object.isRequired,
  collection: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
  }),
  fetchCollection: PropTypes.func.isRequired,
  deleteBookFromCollection: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default connect(
  (state, props) => ({
    books: state.app.books,
    collection: state.app.collections[props.params.id]
  }),
  { fetchCollection, deleteBookFromCollection, updateBook }
)(CollectionPage);
