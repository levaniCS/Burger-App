import React, { Component } from 'react'
import classes from './Modal.css'
import AuxFile from '../../../hoc/AuxFile'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  shouldComponentUpdate (nP, nS) {
    return nP.show !== this.props.show || nP.children !== this.props.children
  }

  render () {
    return (
      <AuxFile>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </AuxFile>
    )
  }
}

export default Modal
