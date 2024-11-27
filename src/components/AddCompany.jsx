import React from 'react'
import { IoClose } from "react-icons/io5";
function AddCompany({ handlecompany }) {
  return (
    <div className="overlay ">
      <div className="addcar">
        <div className="addcar-paragragh-icon">
          <p>Add a Company</p>
          <IoClose className="addcar-icon" onClick={handlecompany} />
        </div>

        <form action="" className="addcar-form">
          <div className="label-input-addcar">
            <label htmlFor=""> Company Name</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Tin Number</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Invoice Number</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Name Client</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Contact Number</label>
            <input type="text" />
          </div>
          <button className="addcar-button">Add a Company</button>
        </form>
      </div>
    </div>
  );
}

export default AddCompany