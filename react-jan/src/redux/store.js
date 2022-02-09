import { createStore } from 'redux'
import { messaageReducer } from './Message/message.reducer'
let store = createStore(messaageReducer);
export { store }