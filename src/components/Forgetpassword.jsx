import React from 'react'
import '../styles/Forgetpassword.css'
import { Link } from 'react-router-dom';
function Forgetpassword() {
  return (
    <div className="forgetpassword">
      <p>Forget password ?</p>
      <div className="forget-input-button">
        <input type="email" placeholder="Enter Your Email" />
        <Link to="entercode">
          <button>send</button>
        </Link>
      </div>
    </div>
  );
}

export default Forgetpassword