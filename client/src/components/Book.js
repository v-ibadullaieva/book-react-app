import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Book = ({ collections, book, onToggle, isOpen, addBookToCollection, onUpdate }) => {
  const availableCollections = collections.filter((c) => !c.books.includes(book._id));
  return (
    <Card>
      <CardBody>
        <CardTitle>{book.name}</CardTitle>
        <CardSubtitle>{book.author}</CardSubtitle>
        <CardText>{book.price}</CardText>
        <StarRating rating={book.rating} onChange={(rating) => onUpdate({ _id: book._id, rating })} />
        {collections.length > 0 &&
          <Dropdown isOpen={isOpen} toggle={() => onToggle(book._id)}>
            <DropdownToggle caret disabled={availableCollections.length === 0}>
              Add to collection
            </DropdownToggle>
            <DropdownMenu>
              {availableCollections.map((collection) =>
                <DropdownItem
                  onClick={() => addBookToCollection({ bookId: book._id, collectionId: collection._id })}
                  key={collection._id}
                >
                  {collection.name}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        }
      </CardBody>
    </Card>
  )
}

Book.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      books: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  collection: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  addBookToCollection: PropTypes.func.isRequired
}

export default Book;
