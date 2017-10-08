import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { getCollections, getCollection, getBooks, updateCollection, updateBook, addBookToCollection, deleteBookFromCollection } from "../lib/api";
import { COLLECTIONS_FETCH, BOOK_ADD_TO_COLLECTION, BOOK_DELETE_FROM_COLLECTION, COLLECTION_FETCH, COLLECTION_UPDATE, BOOK_UPDATE, BOOKS_FETCH, fetchCollectionSuccess, fetchCollectionsSuccess, fetchBooksSuccess } from '../reducers/appReducer';

export default (action$) =>
  Observable.merge(
    action$
      .ofType(COLLECTIONS_FETCH)
      .flatMap(() =>
        getCollections().then(collections => fetchCollectionsSuccess(collections))),
    action$
      .ofType(COLLECTION_FETCH)
      .flatMap(({ payload }) =>
        getCollection({ id: payload.id }).then(collection => fetchCollectionSuccess(collection))),
    action$
      .ofType(COLLECTION_UPDATE)
      .flatMap(({ payload }) =>
        updateCollection(payload).then(collection => fetchCollectionsSuccess([collection]))),
    action$
      .ofType(BOOK_UPDATE)
      .flatMap(({ payload }) =>
        updateBook(payload).then(book => fetchBooksSuccess([book]))),
    action$
      .ofType(BOOKS_FETCH)
      .flatMap(({ payload }) =>
        getBooks().then(books => fetchBooksSuccess(books))),
    action$
      .ofType(BOOK_ADD_TO_COLLECTION)
      .flatMap(({ payload }) =>
        addBookToCollection(payload).then(collection => fetchCollectionsSuccess([collection]))),
    action$
      .ofType(BOOK_DELETE_FROM_COLLECTION)
      .flatMap(({ payload }) =>
        deleteBookFromCollection(payload).then(collection => fetchCollectionsSuccess([collection])))
  )
