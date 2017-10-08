import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { CardColumns } from 'reactstrap';

class BookList extends Component {
	state = { openedId: null }

	handleToggle = (id) =>
		this.setState({
			openedId: this.state.openedId === id ? null : id
		})

	render() {
		const { books, collections, addBookToCollection, updateBook } = this.props;
		const { openedId } = this.state

		return (
			<CardColumns>
				{books.map(book =>
					<Book
						key={book._id}
						collections={collections}
						book={book}
						isOpen={openedId === book._id}
						onToggle={this.handleToggle}
						addBookToCollection={addBookToCollection}
						onUpdate={updateBook}
					/>
				)}
			</CardColumns>
		)
	}
}

BookList.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
	  _id: PropTypes.string.isRequired
  }).isRequired).isRequired,
  addBookToCollection: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default BookList;
