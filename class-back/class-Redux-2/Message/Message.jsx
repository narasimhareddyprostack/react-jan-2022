import { gmAction, gnAction } from '../redux/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'
let Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state
    })
    let msg = "Hello"
    let gmHandler = () => {
        console.log("GM Handler - Message View")
        //dispatch an action
        dispatch(gmAction());
    }
    let gnHandler = () => {
        //displath an action
        dispatch(gnAction())
    }
    return <div>
        <h6>Message Componet</h6>
        <br /><br /><br />
        <h4>Your Message: {message.msg}</h4>
        <pre>{JSON.stringify(message)}</pre>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message