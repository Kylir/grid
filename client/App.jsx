import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import Matrix from './Components/Matrix/Matrix.jsx'
import styles from './app.scss'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Matrix />
      </Provider>
    )
  }
}
