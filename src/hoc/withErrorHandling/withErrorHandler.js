import React, { Component } from 'react'
import Modal from '../../components/UI/modal/Modal'
import AuxFile from '../AuxFile'

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null }

    componentWillMount () {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error })
        }
      )
    }

    //preventing memory leaks
    componentDidMount () {
      axios.interceptors.request.eject(this.requestInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
    }

    errorCinfirmHandler = () => {
      this.setState({ error: null })
    }
    render () {
      return (
        <AuxFile>
          <Modal show={this.state.error} modalClosed={this.errorCinfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </AuxFile>
      )
    }
  }
}

export default WithErrorHandler
