import React from 'react'
import'../styles/Settingform.css'
function Settingform() {
  return (
    <div className="settingform">
      <p className="settingformpara">General Setting</p>
      <div className="set-input-label1">
        <div className="set-input-label">
          <label htmlFor="">Firstname</label>
          <input type="text" placeholder="Mickey" />
        </div>
        <div className="set-input-label">
          <label htmlFor="">Lastname</label>
          <input type="text" placeholder="Mickey" />
        </div>
      </div>
      <div className="set-input-label">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="mickey@gmail.com" />
      </div>

      <div className="set-input-label1">
        <div className="set-input-label">
          <label htmlFor="">Currency used</label>
          <input type="text" placeholder="RWF" />
        </div>
        <div className="set-input-label">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Kicukiro" />
        </div>
      </div>
      <div className="set-input-label">
        <label htmlFor="">State</label>
        <input type="text" placeholder="Rwanda" />
      </div>
    </div>
  );
}

export default Settingform