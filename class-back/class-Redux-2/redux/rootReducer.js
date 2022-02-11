import { combineReducers } from 'redux'
import { messaageReducer } from './message/message.reducer'
import { counterReducr } from './counter/counter.reducer'

let rootReducer = combineReducers({ counter: counterReducr, message: messaageReducer });

export { rootReducer }