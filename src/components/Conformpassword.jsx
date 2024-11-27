import React from 'react'
import { Link } from 'react-router-dom';

function Conformpassword() {
  return (
    <div className="forgetpassword">
      <p>Set new password </p>
      <div className="forget-input-button">
        <input type="email" placeholder="change password" />
        <input type="email" placeholder="conform password" />
        <Link to="/">
          <button>send</button>
        </Link>
      </div>
    </div>
  );
}

export default Conformpassword