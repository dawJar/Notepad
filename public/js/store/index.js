import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import reduxLogger from 'redux-logger';


const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//     middleware = [ ...middleware, reduxLogger() ];
// }

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)

export default store;