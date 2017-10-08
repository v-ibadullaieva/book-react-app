import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import CollectionPage from './components/CollectionPage'
import CollectionsPage from './components/CollectionsPage'
import EditCollectionPage from './components/EditCollectionPage'
import BooksPage from './components/BooksPage'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={CollectionsPage} />
        <Route path="collections/:id" component={CollectionPage} />
        <Route path="collections/:id/edit" component={EditCollectionPage} />
        <Route path="books" component={BooksPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
