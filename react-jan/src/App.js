import Message from './Message/Message'
import { store } from './redux/store'
import { Provider } from 'react-redux'
let App = () => {
    return <div>
        <Provider store={store}>
            <h1>
                App Component
            <hr />
                <Message />
            </h1>
        </Provider>
    </div>
}
export default App