export const getBooks = () =>
  fetch(
    'http://localhost:3001/api/books/',
    {
      method: "GET"
    }
  ).then(res => res.json());

export const getCollections = () =>
  fetch(
    'http://localhost:3001/api/collections/',
    {
      method: "GET"
    }
  ).then(res => res.json());

export const getCollection = ({ id }) =>
  fetch(
    `http://localhost:3001/api/collections/${id}`,
    {
      method: "GET"
    }
  ).then(res => res.json());

export const updateCollection = (collection) =>
  fetch(
    `http://localhost:3001/api/collections/${collection._id}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(collection)
    }
  ).then(res => res.json());

export const updateBook = (book) =>
  fetch(
    `http://localhost:3001/api/books/${book._id}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(book)
    }
  ).then(res => res.json());

export const addBookToCollection = ({ bookId, collectionId }) =>
  fetch(
    `http://localhost:3001/api/collections/${collectionId}/books`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ bookId })
    }
  ).then(res => res.json());

export const deleteBookFromCollection = ({ bookId, collectionId }) =>
  fetch(
    `http://localhost:3001/api/collections/${collectionId}/books/${bookId}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "DELETE",
    }
  ).then(res => res.json());
