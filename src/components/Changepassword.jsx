import React from 'react'
import '../styles/Changepassword.css'
function Changepassword() {
  return (
    <div className="changepassword">
      <div className="changepassword-input-label">
        <label>Enter Current Password</label>
              <input type="text"
                 className="changepassword-input" />
      </div>
      <div className="changepassword-input-label">
        <label>Enter Current Password</label>
        <input
          type="text"
          placeholder="*********"
          className="changepassword-input"
        />
      </div>
          <button className="changepassword-button">
              Save
      </button>
    </div>
  );
}

export default Changepassword