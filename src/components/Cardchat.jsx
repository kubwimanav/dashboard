import React from 'react'
import Charts from './Charts'

function Cardchat() {
    const cars = [
      { name: "Hondo Jozz", type: "Sport Car", time: "10:am", money: "$20" },
      { name: "Hondo Jozz", type: "Sport Car", time: "10:am", money: "$50 "},
      { name: "Hondo Jozz", type: "Sport Car", time: "10:am", money: "$30" },
      { name: "Hondo Jozz", type: "Sport Car", time: "10:am", money: "$40 "},
    ];
  return (
    <div>
      <Charts />
      <div>
        <div>
          {cars.map((car) => (
            <div>
              <div>
                <div>{car.name}</div>
                <div>{car.type}</div>
              </div>
              <div>
                <div>{car.time}</div>
                <div>{car.money}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cardchat