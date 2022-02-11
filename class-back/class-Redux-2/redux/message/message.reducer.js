import { GM, GN } from './message.action'

let initialState = {
    msg: "Hello........Rajni Kanth"
}
let messaageReducer = (state = initialState, action) => {
    console.log("Message Reducer  - redux reducer ", action.type)
    switch (action.type) {
        case GM:
            return { msg: "Good Mornig" }
        case GN:
            return { msg: "Goood Night" }
        default:
            return state
    }
}

export { messaageReducer }