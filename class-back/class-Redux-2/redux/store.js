import { rootReducer } from './rootReducer'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
let store = createStore(rootReducer, composeWithDevTools());
export { store }