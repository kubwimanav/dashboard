import React, { useState } from "react";
import "../styles/Listening.css";
import { Link } from "react-router-dom";
function Listening({ handlelisten }) {

  // const [openService, setOpenService] = useState(false);
  // const handleservice = () => {
  //   setOpenService(!openService)
  // }

  return (


    <div className="listening-card-card">
      
        <Link to="carreport" className="report-paragh" onClick={handlelisten}>
          All Cars
        </Link>
        <Link to="company" className="report-paragh" onClick={handlelisten}>
          Companyies
        </Link>
        <Link  to ='service' className="report-paragh" onClick={handlelisten}>
          Services
        </Link>
     
    </div>
    

  );
}

export default Listening;
