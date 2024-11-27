import React from 'react'
import '../styles/Tableedit.css'
function Tableedit() {


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
    let i = 0;
  return (
    <section className="table__body">
      <h3 style={{ color: "#191943" }}>Received Messages</h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th> Name</th>
            <th>Email</th>
            <th>Creation date</th>
            <th>Return date</th>
            <th>Car type</th>
            <th>Type</th>
            <th>Total price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((message, index) => (
            <tr>
              <td>{(i += 1)}</td>
              <td>{message.ownername}</td>
              <td>{message.email}</td>
              <td>{message.creationdate}</td>
              <td>{message.returndate}</td>
              <td>{message.cartype}</td>
              <td>{message.type}</td>
              <td>{message.price}</td>
              <td className="contact-button1">
                <button className="contBtns" style={{ color: "white" }}>
                  Reply
                </button>
                <button
                  style={{ color: "#191943", backgroundColor: "#fee60c" }}
                  className="contBtns"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Tableedit