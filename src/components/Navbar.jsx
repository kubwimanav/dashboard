import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import profile from "/key.png";
import "../styles/Navbar.css";
import { Link} from "react-router-dom";
import Search from "./Search";

function Navbar() {

  const [openModel, setOpenModel] = useState(false)
   const handlemodal = () => {
     setOpenModel(!openModel);
   };

  return (
    <div className="nav">
      <div className="navbar">
        {openModel && <Search handlemodal={handlemodal} />}
        <div className="profile1-nav">
          <div className="profile-nav">
            <img src={profile} />
          </div>
          <div className="profile-header-para">
            <p className="profile-header-para1">Access Transport</p>
            <p className="profile-header-para2"> Company</p>
          </div>
        </div>
        <FaBars onClick={handlemodal} className="bar" />
        <Link to="/" className="logout">
          <CgLogOut className="logout-icon" style={{ color: "black" }} /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
