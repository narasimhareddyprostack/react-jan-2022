import { INCR, DECR } from './counter.action'
let initialState = {
    counter: 0
}
let counterReducr = (state = initialState, action) => {
    console.log(action);
    console.log(action.type);
    switch (action.type) {
        case INCR:
            return { counter: state.counter + 1 }
        case DECR:
            return { counter: state.counter - 1 }
        default:
            return state;
    }
}
export { counterReducr }