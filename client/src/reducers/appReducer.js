export const BOOKS_FETCH = "BOOKS_FETCH";
export const BOOKS_FETCH_SUCCESS = "BOOKS_FETCH/SUCCESS";
export const COLLECTIONS_FETCH = "COLLECTIONS_FETCH";
export const COLLECTIONS_FETCH_SUCCESS = "COLLECTIONS_FETCH/SUCCESS";
export const COLLECTION_FETCH = "COLLECTION_FETCH";
export const COLLECTION_FETCH_SUCCESS = "COLLECTION_FETCH/SUCCESS";
export const COLLECTION_UPDATE = "COLLECTION_UPDATE";
export const BOOK_UPDATE = "BOOK_UPDATE";
export const BOOK_ADD_TO_COLLECTION = "BOOK_ADD_TO_COLLECTION";
export const BOOK_DELETE_FROM_COLLECTION = "BOOK_DELETE_FROM_COLLECTION";

export const fetchBooksSuccess = (books) => ({
  type: BOOKS_FETCH_SUCCESS,
  payload: books
});

export const fetchCollectionsSuccess = (collections) => ({
  type: COLLECTIONS_FETCH_SUCCESS,
  payload: collections
});

export const fetchCollectionSuccess = (collection) => ({
  type: COLLECTION_FETCH_SUCCESS,
  payload: collection
});

export const fetchBooks = () => ({
  type: BOOKS_FETCH
})

export const fetchCollections = () => ({
  type: COLLECTIONS_FETCH
});

export const fetchCollection = ({ id }) => ({
  type: COLLECTION_FETCH,
  payload: { id }
});

export const updateCollection = (collection) => ({
  type: COLLECTION_UPDATE,
  payload: collection
})

export const updateBook = (book) => ({
  type: BOOK_UPDATE,
  payload: book
})

export const addBookToCollection = ({ bookId, collectionId }) => ({
  type: BOOK_ADD_TO_COLLECTION,
  payload: { bookId, collectionId }
})

export const deleteBookFromCollection = ({ bookId, collectionId }) => ({
  type: BOOK_DELETE_FROM_COLLECTION,
  payload: { collectionId, bookId }
})

const initState = {
  collections: {},
  books: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case BOOKS_FETCH_SUCCESS: {
      const books = {};
      action.payload.forEach(book => books[book._id] = book);
      return {
        ...state,
        books: {
          ...state.books,
          ...books
        }
      };
    }
    case COLLECTIONS_FETCH_SUCCESS: {
      const collections = {}
      action.payload.forEach(col => collections[col._id] = col);
      return {
        ...state,
        collections: {
          ...state.collections,
          ...collections,
        }
      };
    }
    case COLLECTION_FETCH_SUCCESS: {
      const collection = {
        ...action.payload,
        books: action.payload.books.map((b) => b._id)
      }
      const books = {};
      action.payload.books.forEach(book => books[book._id] = book);

      return {
        ...state,
        collections: {
          ...state.collections,
          [action.payload._id]: collection
        },
        books: {
          ...state.books,
          ...books
        }
      }
    }
    default:
      return state;
  }
};
