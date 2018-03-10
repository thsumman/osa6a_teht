import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
//import anecdoteReducer, { anecInitialization } from './reducers/anecdoteReducer'

//import anecdoteService from './services/anecdotes'

//const store = createStore(reducer)

/*anecdoteService.getAll().then(anecdotes =>
  store.dispatch(anecInitialization(anecdotes))
)*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
