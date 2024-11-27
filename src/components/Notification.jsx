import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import '../styles/Notification.css'
function Notification() {
  return (
    <div className='notifications-1'>
      <div className="notification">
        <FaLocationDot />
        <div>
          <p>March 11. 12:00</p>
          <p className="notparagraph1">New Client Has booked a wedding car</p>
        </div>
      </div>

      <div className="notification">
        <FaLocationDot />
        <div>
          <p>March 11. 12:00</p>
          <p className="notparagraph1">New Client Has booked a wedding car</p>
        </div>
      </div>

      <div className="notification">
        <FaLocationDot />
        <div>
          <p>March 11. 12:00</p>
          <p className="notparagraph1">New Client Has booked a wedding car</p>
        </div>
      </div>

      <div className="notification">
        <FaLocationDot  className='not-icon'/>
        <div>
          <p>March 11. 12:00</p>
          <p className="notparagraph1">New Client Has booked a wedding car</p>
        </div>
      </div>
      <div className="notification">
        <FaLocationDot />
        <div>
          <p>March 11. 12:00</p>
          <p className="notparagraph1">New Client Has booked a wedding car</p>
        </div>
      </div>
      <div className="notification">
        <FaLocationDot />
        <div>
          <p>March 11. 12:00</p>
          <p className="notparagraph1">New Client Has booked a wedding car</p>
        </div>
      </div>
    </div>
  );
}

export default Notification