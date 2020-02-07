import React from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

const Checkout = props => {
  const checkoutCancelledHandler = () => {
    props.history.goBack()
  }

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data')
  }

  let summary = <Redirect to='/' />
  if (props.ings) {
    const purchsedRedirect = props.purchased ? <Redirect to='/' /> : null
    summary = (
      <div>
        {purchsedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          CheckoutCancelled={checkoutCancelledHandler}
          CheckoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    )
  }
  return <div>{summary}</div>
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
}
export default connect(mapStateToProps)(Checkout)
