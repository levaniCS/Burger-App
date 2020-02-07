import React from 'react'
import Modal from '../../components/UI/modal/Modal'
import AuxFile from '../AuxFile'

import useHttpErrorHandler from '../../hooks/http-error-handler'

const WithErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios)
    return (
      <AuxFile>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </AuxFile>
    )
  }
}

export default WithErrorHandler
