import React, { useState } from 'react'
import '../styles/OurServices.css'
import { IoClose } from "react-icons/io5";
function OurServices() {

    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
      setIsVisible(false);
    };
  return (
    isVisible && (
    <div className="seviceoverlay">
      <div className="service">
        <IoClose className="service-icon"  onClick={handleClose}/>
        <div className="service-1">
          <h6>Our Services</h6>
          <div className="service-paragraph">
            <p>Cars rental</p>
            <p>Country tours</p>
            <p>Weeding cars</p>
            <p>Airport transfers</p>
            <p>Other transportation activities</p>
            <button>Add a service</button>
          </div>
        </div>
      </div>
      </div>
    )
  );
}

export default OurServices