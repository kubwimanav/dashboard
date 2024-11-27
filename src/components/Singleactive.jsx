import React from 'react'
import singleimag from '/pexels5.png'
import '../styles/Singleactive.css'
function Singleactive() {
  return (
    <div className="singlecar">
      <div>
        <div>
          <img src={singleimag} alt="" className="single-image1" />
        </div>
        <div className="single-card1">
          <div className="single-card1-images">
            <img src={singleimag} alt="" className="singl-card1-img" />
            <img src={singleimag} alt="" className="singl-card1-img" />
            <img src={singleimag} alt="" className="singl-card1-img" />
            <img src={singleimag} alt="" className="singl-card1-img" />
          </div>
          <button>Add other colors of the car</button>
        </div>
      </div>
      <div className="singl-card2">
        <p>Audi's R8 Blue</p>
        <div className="single-card-type">
          <p>style: audi</p>
          <p>type: auto</p>
          <p>color: blue</p>
        </div>
        <p>$288,892</p>
        <button>Add all the views of the car</button>
      </div>
    </div>
  );
}

export default Singleactive