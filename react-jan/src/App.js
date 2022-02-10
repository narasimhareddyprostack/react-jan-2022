/* import Message from './Message/Message' */
import { store } from './redux/store'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
let App = () => {
    return <div>
        <Provider store={store}>
            <h1> App Component</h1>
            <hr />
            {/* <Message /> */}
            <Counter />
        </Provider>


    </div>
}
export default App