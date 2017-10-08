import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import StarRating from './StarRating';

const CollectionBook = ({ collection, book, onDelete, onUpdate }) =>
  <Card>
    <CardBody>
      <CardTitle>{book.name}</CardTitle>
      <CardSubtitle>{book.author}</CardSubtitle>
      <CardText>{book.price}</CardText>
      <StarRating rating={book.rating} onChange={(rating) => onUpdate({ _id: book._id, rating })} />
      <Button onClick={() => onDelete({ bookId: book._id, collectionId: collection._id })}>Remove book</Button>
    </CardBody>
  </Card>

CollectionBook.propTypes = {
  collection: PropTypes.shape({
    _id: PropTypes.string.isRequired
  }).isRequired,
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default CollectionBook;
