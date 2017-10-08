import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'
import rootEpic from './epics/rootEpic';
import reducer from './reducers/appReducer';

const rootReducer = combineReducers({
  app: reducer,
  form: formReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic);
const loggerMiddleware = createLogger({});

export default createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, loggerMiddleware)
)

