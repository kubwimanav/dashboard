import React from 'react'
import { MdFilterList } from "react-icons/md";
import made from '/image.jpg'
import '../styles/Table.css'

function Table() {

         const data = [
           { id: 1, name: "John Doe", carNo: 324, age: 28 },
           { id: 2, name: "Jane Smith", carNo: 324, age: 34 },
           { id: 3, name: "Sam Green", carNo: 324, age: 45 },
         ];
         let i = 0;
  return (
    <div className="skils-table">
      <div className="customtables">
        <div className="customtable">
          <p>Live Car Status</p>

          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <MdFilterList className="filtericon" />
            </div>
            <p>Filter</p>
          </div>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>No</th>
              <th>CarNo</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Earnings</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.carNo}</td>
                <td>{row.name}</td>
                <td>{row.carNo}</td>
                <td>{row.age}</td>
                <td>
                  <button className="buttontable">details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="skills">
        <p className="skillsparagraph">Top 5 Car rented out</p>
        <div className="skills-1">
          <div>
            <div className="skillstext">
              <p>sportcar</p>
              <p className="divbar1">45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar"></div>
            </div>
          </div>

          <div>
            <div className="skillstext">
              <p>suv</p>
              <p className="divbar1">45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar1"></div>
            </div>
          </div>

          <div>
            <div className="skillstext">
              <p>coupe</p>
              <p className="divbar1">45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar2"></div>
            </div>
          </div>

          <div>
            <div className="skillstext">
              <p>honda</p>
              <p className="divbar1">45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar3"></div>
            </div>
          </div>

          <div>
            <div className="skillstext">
              <p>hatchback</p>
              <p className="divbar1">45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table