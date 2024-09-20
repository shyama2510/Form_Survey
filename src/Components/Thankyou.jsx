import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
 return (
    <div className="thankyou-container">
      <h2>Thank You for Your Feedback!</h2>
      <p>We appreciate you taking the time to complete our survey. Your responses are valuable to us and will help us improve our products and services.</p>
      <p>We will redirect you to the home page shortly. If you are not redirected automatically, 
      <Link to="/">click here</Link>.</p>
    </div>
  );
}

export default ThankYou;
