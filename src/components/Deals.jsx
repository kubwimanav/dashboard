import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/Deals.css";
import Editform from './Editform';

function Deals() {


    const deals = [
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },

      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
      {
        ownername: "Green",
        email: "green@gmail.com",
        creationdate: "31 jun 2024",
        returndate: "31 july 2025",
        cartype: "hyundai",
        type: "card",
        price: "$ 332",
      },
    ];



    const [openForm, setOpenForm] = useState(false);
    const handlemodal = () => {
      setOpenForm(!openForm);
    };
    let i = 0;
  return (
    <div className="deals">
      {openForm && <Editform handlemodal={handlemodal} />}
      <div>
        <p>Deals</p>
        <p>Get your latest update for lastest 30days</p>
      </div>

      <section className="table-deals">
        <table className="custom-table-deals">
          <thead className="head-deals">
            <tr>
              <th>No</th>
              <th> Name</th>
              <th>Email</th>
              <th className="tddiplay">Creation date</th>
              <th className="tddiplay">Return date</th>
              <th>Car type</th>
              <th>Type</th>
              <th>Total price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((dealdata) => (
              <tr>
                <td>{(i += 1)}</td>
                <td>{dealdata.ownername}</td>
                <td>{dealdata.email}</td>
                <td className="tddiplay">{dealdata.creationdate}</td>
                <td className="tddiplay">{dealdata.returndate}</td>
                <td>{dealdata.cartype}</td>
                <td>{dealdata.type}</td>
                <td>
                  {" "}
                  <p className="companystatus">{dealdata.price}</p>
                </td>
                <td className="deals-icon">
                  <div>
                    <MdModeEditOutline onClick={handlemodal} />
                  </div>
                  <div>
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Deals