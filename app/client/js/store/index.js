import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from '../middleware';
import reducers from '../reducers';

const middleware = applyMiddleware(promiseMiddleware);
const store = createStore(reducers, middleware);

export default store;