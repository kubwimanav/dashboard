import React from 'react'
import '../styles/Helpcenter.css'
function Helpcenter() {
  return (
    <div className="helpcenter-div">
      <div className="helpcenter">
        <div className="helpcenter-input-label">
          <label htmlFor="" className="helpcenter-label">
            Whatsappnumber
          </label>
          <input
            type="text"
            placeholder="+250789466837"
            className="helpcenter-input"
          />
        </div>
        <div className="helpcenter-input-label">
          <label htmlFor="" className="helpcenter-label">
            Welcome message
          </label>
          <input
            type="text"
            placeholder=" We look forward to serving you!"
            className="helpcenter-input"
          />
        </div>
      </div>
    </div>
  );
}

export default Helpcenter