import React from 'react'
import '../styles/Cards.css'
import pixel1 from "/1 4.png";
import coins from "/7xm98.png";
import image from '/7xm97.png'
import imagee from "/7xm99.png";
function Cards() {
  return (
    <div className="allcard">
      <div className="allcard1">
        <div className="card">
          <img src={pixel1} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p className="cardparagraph2">Car rented</p>
          </div>
        </div>

        <div className="card">
          <img src={coins} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p className="cardparagraph2">Earnings</p>
          </div>
        </div>
        <div className="card">
          <img src={image} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p className="cardparagraph2">Deals</p>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={imagee} className="cardimage" />
        <div className="cardparagraph">
          <p className="cardparagraph1">500+</p>
          <p className="cardparagraph2">Companies</p>
        </div>
      </div>
    </div>
  );
}

export default Cards