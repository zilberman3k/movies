import React, { Component } from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import MovieLibrary from './MovieLibrary'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MovieLibrary />
      </Provider>
    )
  }
}

export default App
