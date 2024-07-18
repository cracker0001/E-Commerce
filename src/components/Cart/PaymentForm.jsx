import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentForm.css';

const PaymentForm = () => {
  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      <form>
        <label>
          Name
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Card details
          <div className="card-details">
            <input type="text" placeholder="Card number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVC" />
          </div>
        </label>
        <Link to="/payment-success">
        <button>Pay</button>
      </Link>
      </form>
    </div>
  );
};

export default PaymentForm;
