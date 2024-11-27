import React from 'react'
import '../styles/Reportcard.css'
import { Link } from 'react-router-dom'
function Reportcard({ handle }) {
  return (
    <div className="report">
      <Link to="carreport" className="report-paragh" onClick={handle}>Car's Report</Link>
      <Link to="company" className="report-paragh" onClick={handle}>
        Company's Report
      </Link>
      <Link  className="report-paragh" onClick={handle}>Payment's Report</Link>
      <Link to="deal" className="report-paragh" onClick={handle}>Deal's Report</Link>
    </div>
  );
}

export default Reportcard