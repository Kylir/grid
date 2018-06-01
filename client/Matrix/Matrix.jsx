import styles from './_Matrix.scss'
import React from 'react'

export default class Matrix extends React.Component {
  render() {
    
    console.log(styles);
    
    return <div className={styles.matrix}>I'm the Matrix!</div>
  }
}