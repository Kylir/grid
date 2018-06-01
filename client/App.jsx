import React from 'react'
import ReactDOM from 'react-dom'
import Matrix from './Matrix/Matrix.jsx'
import styles from './app.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.truc}>
        Here is the matrix:
        <Matrix />
      </div>
    );
  }
}
