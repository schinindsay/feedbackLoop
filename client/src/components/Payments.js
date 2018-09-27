import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="FeedbackLoop"
        description="$5 for 5 email credits"
        //charge in pennies
        amount={500}
        //a callback function that will be called after we receive the payment
        token={token => this.props.handleToken(token)}
        //see .env.developer.js and .env.production.js
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      > 
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

//using connect we are connecting the actions/index.js action creator with Redux so that the handleToken is invoked when we get the payment confirmation back from stripe
export default connect(null, actions)(Payments);