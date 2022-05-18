import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhensers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhensers );


export default store;