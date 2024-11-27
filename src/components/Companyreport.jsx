import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/Payment.css";
import Editform from './Editform';
import AddCompany from './AddCompany';
function Companyreport() {
     const deals = [
       {
         ownername: "Gren Motley",
         email: "green@gmail.com",
         image: "/Ellipse 59.png",
         status: "active",
         tinNumber: 12345,
         phoneNumber: 78555555,
       },
       {
         ownername: "Gren Motley",
         email: "green@gmail.com",
         image: "/Ellipse 59.png",
         status: "active",
         tinNumber: 12345,
         phoneNumber: 78555555,
       },

       {
         ownername: "Gren Motley",
         email: "green@gmail.com",
         image: "/Ellipse 59.png",
         status: "active",
         tinNumber: 12345,
         phoneNumber: 78555555,
       },
       {
         ownername: "Gren Motley",
         email: "green@gmail.com",
         image: "/Ellipse 59.png",
         status: "active",
         tinNumber: 12345,
         phoneNumber: 78555555,
       },
       {
         ownername: "Gren Motley",
         email: "green@gmail.com",
         image: "/Ellipse 59.png",
         status: "active",
         tinNumber: 12345,
         phoneNumber: 78555555,
       },
       {
         ownername: "Gren Motley",
         email: "green@gmail.com",
         image: "/Ellipse 59.png",
         status: "active",
         tinNumber: 12345,
         phoneNumber: 78555555,
       },
      
     ];
        const [openForm, setOpenForm] = useState(false);
        const handlemodal = () => {
          setOpenForm(!openForm);
  };
  const [openCompany, setOpenCompany] = useState(false);
  const handlecompany = () => {
    setOpenCompany(!openCompany)
  }
  return (
    <div className="App">
      {openForm && <Editform handlemodal={handlemodal} />}
      {openCompany && <AddCompany handlecompany={handlecompany} />}
      <div className="tablepaymentparagraph">
        <p className="paragraphtable1">Our Company</p>
        <button className="button-company" onClick={handlecompany}>Add a Company</button>
      </div>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th> Name</th>
              <th>Email</th>
              <th>Tin Number</th>
              <th>PhoneNumber</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((dealdata) => (
              <tr>
                <td>
                  <img src={dealdata.image} className="dataimage" />
                </td>
                <td>{dealdata.ownername}</td>
                <td>{dealdata.email}</td>
                <td>{dealdata.tinNumber}</td>
                <td>{dealdata.phoneNumber}</td>
                <td>
                  <p className="companystatus">{dealdata.status}</p>
                </td>
                <td
                  className="deals-icon"
                  style={{ display: "flex", gap: "10px" }}
                >
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

export default Companyreport