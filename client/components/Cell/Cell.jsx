import styles from './_Cell.scss'
import React from 'react'

function getStyle(isOn) {
  if (isOn) {
    return styles.black
  } else {
    return styles.white
  }
}

function Cell (props) {
  const clic = () => {props.toggle(props.index)}
  return <div className={getStyle(props.isOn)} onClick={clic}></div>
}

export default Cell
