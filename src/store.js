import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { user } from './User/store';

const reducer = combineReducers({
	user,
});

const logger = createLogger();

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
)
