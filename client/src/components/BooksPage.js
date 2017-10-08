import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks, fetchCollections, addBookToCollection, updateBook } from '../reducers/appReducer';
import BookList from './BookList';

class BooksPage extends Component {
	componentDidMount() {
		this.props.fetchBooks()
		this.props.fetchCollections()
	}

	render() {
		return (
			<div>
				<h1>All books</h1>
				<BookList
					books={this.props.books}
					collections={this.props.collections}
					addBookToCollection={this.props.addBookToCollection}
					updateBook={this.props.updateBook}
				/>
			</div>
		)
	}
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  collections: PropTypes.array.isRequired,
  addBookToCollection: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  fetchCollections: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default connect(
	(state) => ({
		books: Object.values(state.app.books),
		collections: Object.values(state.app.collections)
	}),
	{ fetchBooks, fetchCollections, addBookToCollection, updateBook }
)(BooksPage)