import React from 'react'
import '../styles/Addcar.css'
import { IoClose } from "react-icons/io5";
function Addcar({ handlemadal }) {
  return (
    <div className="overlay ">
      <div className="addcar">
        <div className="addcar-paragragh-icon">
          <p>Add car</p>
          <IoClose className="addcar-iconn" onClick={handlemadal} />
        </div>

        <form action="" className="addcar-form">
          <div className="label-input-addcar">
            <label htmlFor=""> Enter driver name</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Enter driver's phone number</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Enter car's type</label>
            <input type="text" />
          </div>
          <div className="label-input-date">
            <label htmlFor=""> Enter pick-up date</label>
            <input type="date" className="label-date-addcar" />
          </div>
          <div className="label-input-date">
            <label htmlFor=""> Enter return date</label>
            <input type="date" className="label-date-addcar" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Payment means</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Price</label>
            <input type="text" />
          </div>
          <button className="addcar-button">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Addcar