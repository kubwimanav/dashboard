import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import '../styles/Editform.css'
function Editform({ handlemodal }) {
  

  const [activeForm, setActiveForm] = useState("Youtuber");
  const switchForm = (formType) => {
    setActiveForm(formType);
  };


  const renderForm = () => {
    if (activeForm === "Youtuber") {


      return (
         
          <div className="edit-personalinfo">
            <div className="addcar-paragragh-icon">
              <p>Create deal</p>
              <IoClose className="addcar-icon" onClick={handlemodal} />
            </div>

            <form action="" className="addcar-form">
              <div className="label-input-addcar">
                <label htmlFor=""> Car type</label>
                <input type="text" placeholder='Hyundai' />
              </div>
              <div className="label-input-addcar">
                <label htmlFor=""> Car image</label>
                <input type="text" />
              </div>
              <div className="label-input-date">
                <label htmlFor=""> Creation date</label>
                <input type="date" className="label-date-addcar" />
              </div>
              <div className="label-input-date">
                <label htmlFor=""> Return date</label>
                <input type="date" className="label-date-addcar" />
              </div>
              <div className="label-input-addcar">
                <label htmlFor=""> Payment method</label>
                <input type="text" />
              </div>
              <div className="label-input-addcar">
                <label htmlFor=""> Total Price</label>
                <input type="text" placeholder='$18...' />
              </div>
              <button className="addcar-button">Save</button>
            </form>
          </div>
        
      );
    } else if (activeForm === "Client") {
      return (
        <div className="edit-personalinfo">
          <div className="addcar-paragragh-icon">
            <p>Create deal</p>
            <IoClose className="addcar-icon" onClick={handlemodal} />
          </div>

          <form action="" className="addcar-form">
            <div className="label-input-addcar">
              <label htmlFor=""> First name</label>
              <input type="text" placeholder="mick" />
            </div>
            <div className="label-input-addcar">
              <label htmlFor=""> Last name</label>
              <input type="text"  placeholder='mery'/>
            </div>
            <div className="label-input-addcar">
              <label htmlFor=""> Email</label>
              <input type="text" placeholder='mickmery@gmail.com'/>
            </div>
            <button className="addcar-button">Save</button>
          </form>
        </div>
      );
    }
  }

  return (
    <div className="overlay">
      <div className="editform">
        <div className="form-switch-buttons">
          <button
            id="buttons"
            onClick={() => switchForm("Youtuber")}
            className={`other-edit-button ${
              activeForm === "Youtuber" ? "active-login-button" : ""
            }`}
          >
            Personal information
          </button>
          <button
            id="buttons"
            onClick={() => switchForm("Client")}
            className={`other-edit-button ${
              activeForm === "Client" ? "active-login-button" : ""
            }`}
          >
            Other information
          </button>
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

export default Editform