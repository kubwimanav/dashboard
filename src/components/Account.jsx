import React from 'react'
import '../styles/Account.css'
import profile from "/key.png";
function Account() {
  return (
    <div className="accountform">
      <p>Profile</p>

      <div className="accountimage-button">
        <div className="accountprofile">
            <img src={profile}  className='profileacount'/>
        </div>
        <div>
          <p>Choose your image</p>
          <div className="account-button">
            <button className="account-button1">Browse</button>
            <button className="account-button2">Remove</button>
          </div>
        </div>
      </div>

      <div className="account-input-label-par">
        <p>Information</p>
        <div className="account-inputlabel">
          <div className="account-input-label1">
            <div className="account-input-label">
              <label htmlFor="">Firstname</label>
              <input type="text" placeholder="Mickey" />
            </div>
            <div className="account-input-label">
              <label htmlFor="">Lastname</label>
              <input type="text" placeholder="Mickey" />
            </div>
          </div>
          <div className="account-input-label">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="mickey@gmail.com" />
          </div>
          <div className="account-input-label">
            <label htmlFor="">State</label>
            <input type="text" placeholder="Rwanda" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account