import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionBook from './CollectionBook';
import { CardColumns } from 'reactstrap';

class CollectionBookList extends Component {
	render() {
		const { books, collection, deleteBookFromCollection, updateBook } = this.props;

		return (
			<CardColumns>
				{books.map(book =>
					<CollectionBook
						key={book._id}
						collection={collection}
						book={book}
						onUpdate={updateBook}
						onDelete={deleteBookFromCollection}

					/>
				)}
			</CardColumns>
		)
	}
}

CollectionBookList.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.shape({
    	_id: PropTypes.string.isRequired
  	}).isRequired
  ).isRequired,
  collection: PropTypes.object.isRequired,
  deleteBookFromCollection: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default CollectionBookList;
