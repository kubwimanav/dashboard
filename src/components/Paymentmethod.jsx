import React from 'react'
import '../styles/Paymentmethod.css'
import momo from '/momo.png'
import visa from "/visa.png";
import mastercard from "/mastercard.png";
import { Link } from 'react-router-dom';
function Paymentmethod() {
  return (
    <div className='payment-method'>
      <button className='payment-method-button'>Paymentmethod</button>
      <div className="paymentmethod-card">
        <p>Enable or Disable Payments Methods accordingly</p>
        <div className="payment-input-imag">
          <input type="checkbox" />
          <img src={momo} alt="" />
        </div>

        <div className="payment-input-imag">
          <input type="checkbox" />
          <img src={visa} alt="" />
        </div>

        <div className="payment-input-imag">
          <input type="checkbox" />
          <img src={mastercard} alt="" />
              </div>
              <Link>
                  Disable
              </Link>
      </div>
    </div>
  );
}

export default Paymentmethod