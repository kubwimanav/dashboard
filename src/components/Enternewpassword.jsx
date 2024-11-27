import React from 'react'
import '../styles/Enternewpassword.css'
import { Link } from 'react-router-dom';
function Enternewpassword() {
  return (
    <div className="forgetpassword">
      <p>Enter Your code</p>
      <div className="forget-input-button">
        <input type="text" name="" id="" placeholder="Enter number" />
        <Link to='conform'>
          <button>send reset code</button>
        </Link>
      </div>
    </div>
  );
}

export default Enternewpassword