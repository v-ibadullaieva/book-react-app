import React from 'react';
import PropTypes from 'prop-types';
import CollectionBook from './CollectionBook';
import { CardColumns } from 'reactstrap';

const CollectionBookList = ({ books, collection, deleteBookFromCollection, updateBook }) =>
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
