import React from 'react'
import "../styles/CarReport.css";
function CarReport() {
      const listening = [
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 120.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 154.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 120.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 120.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 160.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 120.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 158.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 154.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 154.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 120.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 154.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 154.png",
          money: 120000,
        },
        {
          car: "Toyota ModelX",
          year: 2021,
          image: "/Rectangle 154.png",
          money: 120000,
        },
      ];
  return (
    <div className="listening">
      {listening.map((datalisten) => (
        <div className="activecard-listening">
          <div className="activecard1-listening">
            <div className="activecard12-listening">
              <div>
                <p>{datalisten.car}</p>
                <p>{datalisten.year}</p>
              </div>

              <p>{datalisten.money}/day</p>
            </div>
            <img src={datalisten.image} className="carimage" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarReport