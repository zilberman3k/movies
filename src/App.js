import React, { Component } from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import MovieLibrary from './MovieLibrary'
import './styles.scss';
import debounce from "lodash.debounce";
import {loadExtraPage} from "./MovieLibrary/store/actions";

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

window.onscroll = debounce(() => {

  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    store.dispatch(loadExtraPage())
  }
}, 100);


window.store=store;

export default App
