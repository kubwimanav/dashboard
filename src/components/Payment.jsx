import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard} from "react-icons/md";
import '../styles/Payment.css'
const tableData = [
  {
    id: 1,
    image: "/pixel6.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$900",
    status: "completed"
  },
  {
    id: 2,
    image: "/1 4.png",
    email: "example2@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$700",
    status: "inprogress",
  },
  {
    id: 3,
    image: "/115.png",
    email: "example3@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$600",
    status: "Cancelled",
  },
  {
    id: 4,
    image: "/117.png",
    email: "example4@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$500",
    status: "Cancelled",
  },
  {
    id: 5,
    image: "/Linco.png",
    email: "example5@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$400",
    status: "completed",
  },
  {
    id: 6,
    image: "/Rectangle 132-1.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "completed",
  },
  {
    id: 6,
    image: "/Linco1.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "inprogress",
  },
   {
    id: 6,
    image: "/pexels5.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "inprogress",
  },

  // {
  //   id: 6,
  //   image: "pexels5.png",
  //   email: "example6@example.com",
  //   name: "payment from king",
  //   date: "12.3.2024",
  //   amount: "$300",
  //   status: "pending",
  // },

  // {
  //   id: 6,
  //   image: "pexels5.png",
  //   email: "example6@example.com",
  //   name: "payment from king",
  //   date: "12.3.2024",
  //   amount: "$300",
  //   status: "pending",
  // },
];

function Payment() {
  return (
    <div className="App">
      <div className="tablepaymentparagraph">
        <p className="paragraphtable1">Payment Details</p>
        <p className="paragraphtable2">
          <CiStopwatch className="tableicon " />
          <p> Last 30 days</p>
          <RiArrowDropDownLine className="tableicon" />
        </p>
      </div>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>
                <MdDashboard className="icon" />
              </th>
              <th>Car</th>
              <th>Transaction</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((message) => (
              <tr>
                <td>
                  <MdDashboard className="icon" />
                </td>
                <td>
                  <img src={message.image} className="dataimage" />
                </td>
                <td>{message.name}</td>
                <td>{message.date}</td>
                <td>{message.amount}</td>
                <td>
                  <p
                    className={
                      message.status === "completed"
                        ? "status-completed"
                        : message.status === "inprogress"
                        ? "status-inprogress"
                        : message.status === "Cancelled"
                        ? "status-Cancelled"
                        : ""
                    }
                  >
                    {message.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Payment;
