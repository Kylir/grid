import React from 'react'
import { connect } from 'react-redux'
import { clickOnCell } from '../../state/actions'
import Cell from '../Cell/Cell.jsx'
import styles from './_Matrix.scss'

class Matrix extends React.Component {

  render() {
    const cells = this.props.state.map((c, i) => {
      return <Cell isOn={c} key={i} index={i} toggle={this.props.clickOnCell}/>
    })
    
    return (
      <div className={styles.matrix}>
        {cells}
      </div>
    )
  }
}

const mapStateToProps = state => ({state})

export default connect(mapStateToProps, { clickOnCell })(Matrix)
