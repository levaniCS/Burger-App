import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';
import ContactData from '../../containers/Checkout/ContactData/ContactData';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to='/' />;
    if (this.props.ings) {
      const purchsedRedirect = this.props.purchased ? (
        <Redirect to='/' />
      ) : null;
      summary = (
        <div>
          {purchsedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            CheckoutCancelled={this.checkoutCancelledHandler}
            CheckoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
    return <div>{summary}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};
export default connect(mapStateToProps)(Checkout);
