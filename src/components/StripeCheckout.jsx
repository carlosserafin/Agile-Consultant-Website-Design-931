import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiCreditCard, FiCheckCircle } = FiIcons;

// Replace with your Stripe public key when available
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const StripeCheckout = ({ price, productName, onClose }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // For demo purposes, we'll simulate a successful payment
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Close the modal after showing success message
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);

    // In a real implementation, you would use Stripe.js to process the payment
    // const stripe = await stripePromise;
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    //   billing_details: { email },
    // });
    
    // if (error) {
    //   setError(error.message);
    //   setLoading(false);
    // } else {
    //   // Send paymentMethod.id to your server for processing
    //   // ...
    //   setSuccess(true);
    //   setLoading(false);
    // }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formatted = value.match(/.{1,4}/g)?.join(' ') || '';
    setCardNumber(formatted.slice(0, 19)); // limit to 16 digits + 3 spaces
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setExpiry(value);
    } else {
      setExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCvc(value.slice(0, 3));
  };

  if (success) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCheckCircle} className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-600 mb-4">
          Your whitepaper has been sent to your email.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your email address"
          />
        </div>
        
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <div className="relative">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10"
              placeholder="1234 5678 9012 3456"
            />
            <SafeIcon icon={FiCreditCard} className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
              Expiration Date
            </label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={handleExpiryChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="MM/YY"
            />
          </div>
          
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={handleCvcChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="123"
            />
          </div>
        </div>
        
        {error && <div className="text-red-500 text-sm">{error}</div>}
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-teal-600 text-white py-3 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center ${
            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-teal-700'
          }`}
        >
          <SafeIcon icon={FiLock} className="h-4 w-4 mr-2" />
          {loading ? 'Processing...' : `Pay $${price}`}
        </button>
      </form>
      
      <div className="mt-4 text-xs text-gray-500 text-center flex items-center justify-center">
        <SafeIcon icon={FiLock} className="h-3 w-3 mr-1" />
        <span>Secure payment processed by Stripe</span>
      </div>
    </div>
  );
};

export default StripeCheckout;