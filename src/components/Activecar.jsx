import React, { useState } from 'react'
import { CiStopwatch } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { RiArrowDropDownLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import '../styles/Activecar.css'
import Addcar from './Addcar';
import { Link } from 'react-router-dom';
import Editform from './Editform';
import ReactPaginate from 'react-paginate';
function Activecar() {
  const activeimage = [
    {
      image: "/Rectangle 154.png",
    },
    {
      image: "/Linco.png",
    },
    {
      image: "/pixel6.png",
    },
    {
      image: "/Linco.png",
    },
    {
      image: "/Rectangle 158.png",
    },
  ];

const tableData = [
  {
    id: 1,
    image: "/Rectangle 154.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 1,
    image: "/Rectangle 154.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 1,
    image: "/Rectangle 154.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 1,
    image: "/Rectangle 154.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 1,
    image: "/Rectangle 154.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 1,
    image: "/Rectangle 154.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 2,
    image: "/Rectangle 154.png",
    email: "example2@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$700",
    status: "pending",
  },
  {
    id: 3,
    image: "/Linco.png",
    email: "example3@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$600",
    type: "card",
    status: "Paid",
  },
  {
    id: 4,
    image: "/Rectangle 132-1.png",
    email: "example4@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$500",
    type: "card",
    status: "Canceling",
  },
  {
    id: 5,
    image: "/Rectangle 154.png",
    email: "example5@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$400",
    type: "card",
    status: "pending",
  },
];
  let i = 0;
    const [openModel, setOpenModel] = useState(false);

    const handlemadal = () => {
      setOpenModel(!openModel);
    };
 const [openForm, setOpenForm] = useState(false);
 const handlemodal = () => {
   setOpenForm(!openForm);
  };
  
  const [pagenumber, setPagenumber] = useState(0);
  const bookpage = 7;
  const pagevisited = pagenumber * bookpage;
  const displaybook = tableData.slice(pagevisited, pagevisited + bookpage);

  const changepage = ({ selected }) => {
    setPagenumber(selected);
  };

  return (
    <div className="active">
      {openModel && <Addcar handlemadal={handlemadal} />}
      {openForm && <Editform handlemodal={handlemodal} />}
      <div className="tableactiveparagraph">
        <p className="paragraphtable1">Payment Details</p>
        <p className="paragraphtable2" onClick={handlemadal}>
          Add a car
        </p>
      </div>
      <div className="activecar">
        <div className="activecard">
          {activeimage.map((active) => (
            <div className="activecard1">
              <div className="activecard12">
                <div>
                  <p>Toyota ModelX</p>
                  <p>2021</p>
                </div>

                <p>120,000/day</p>
              </div>
              <Link to="singlecar">
                <img src={active.image} />
              </Link>
            </div>
          ))}
        </div>

        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>CarDriver</th>
                <th>Phone</th>
                <th className="tddiplay">Date</th>
                <th>Cartype</th>
                <th className="tddiplay">ReturnDate</th>
                <th>Type</th>
                <th>Totalprice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displaybook.map((data) => (
                <tr>
                  <td className="id-icon">
                    <MdDashboard className="icon" />
                    <p>#{(i += 1)}</p>
                  </td>
                  <td>
                    <img src={data.image} className="dataimage" />
                  </td>
                  <td>{data.name}</td>
                  <td className="tddiplay">{data.date}</td>
                  <td>{data.cartype}</td>
                  <td className="tddiplay">{data.date}</td>
                  <td>{data.type}</td>
                  <td>{data.amount}</td>
                  <td className="activeedit-delite">
                    <MdEdit onClick={handlemodal} />
                    <RiDeleteBin6Line className="active-delite" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <ReactPaginate
        className="reactpaginate"
        pageCount={Math.ceil(tableData?.length / bookpage)}
        previousLabel={"Prev"}
        nextLabel={"Next"}
        onPageChange={changepage}
        containerClassName="pagination"
        previousLinkClassName="prevBtn"
        nextLinkClassName="next"
        disabledClassName="disabled"
        activeClassName="paginationactve"
      ></ReactPaginate>
    </div>
  );
}

export default Activecar