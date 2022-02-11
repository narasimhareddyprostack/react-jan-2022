//action types
const INCR = 'INCR';
const DECR = 'DECR';
let incrAction = () => {
    return { type: INCR }
}
let decrAction = () => {
    return { type: DECR }
}
export { INCR, DECR, incrAction, decrAction }