
import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineClock } from "react-icons/hi";
import profile from "/key.png";
import { FaChevronDown } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAppBlocking } from "react-icons/md";
import '../styles/Sidebar.css'
import { Link, NavLink } from "react-router-dom";
import Reportcard from "./Reportcard";
import Listening from "./Listening";

function Sidebar() {

  const [ openReport, setOpenReport ]= useState(false);
  const handle = () => {
    setOpenReport(!openReport)
  }
    const [openlisten, setOpenlisten] = useState(false);
    const handlelisten = () => {
      setOpenlisten(!openlisten);
    };
  const menu = [
    {
      icon: <MdDashboard className="icon" />,
      path: "dashboard",
      name: "Dashboard",
    },
    {
      icon: <RiLockPasswordLine className="icon" />,
      path: "carreport",
      icon1: <FaChevronDown className="icoon" onClick={handlelisten} />,
      name: "Listening",
    },
    {
      icon: <MdOutlineAppBlocking className="icon" />,
      path: "deal",
      name: "Deals",
    },
    {
      icon: <HiOutlineClock className="icon" />,
      path: "activecar",
      name: " Activecar",
    },
  ];
  const othermenu=[
    {
      icon: <RiSecurePaymentLine className="icon" />,
      path: "payments",
      name: " Payments Details",
    },
    {
      icon: <IoMdSettings className="icon" />,
      path: "settings",
      name: "Settings",
    },
    {
      icon: <MdOutlineHelp className="icon" />,
      path: "helpCenter",
      name: "Help Center",
    },
  ];
  return (
    <div className="sidebar">
      {openReport && <Reportcard handle={handle} />}
      {openlisten && <Listening handlelisten={handlelisten} />}
      <div className="profile12">
        <div className="profile1">
          <div className="profile">
            <img src={profile} />
          </div>
          <div className="profile-header-para">
            <p className="profile-header-para1">Access Transport</p>
            <p className="profile-header-para2"> Company</p>
          </div>
        </div>
        <div className="othermenus">
          <div className="menu">
            <p>Menu</p>
            <div className="menu-link">
              {menu.map((menudata) => (
                <NavLink
                  to={menudata.path}
                  className={({ isActive }) =>
                    isActive ? "linkside-active" : "linkside"
                  }
                >
                  {menudata.icon}
                  <div className="list_dash">{menudata.name}</div>
                  {menudata.icon1}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="othermenu">
            <p>Othermenu</p>
            <div className="menu-link">
              {othermenu.map((otherdata) => (
                <NavLink
                  to={otherdata.path}
                  className={({ isActive }) =>
                    isActive ? "linkside-active" : "linkside"
                  }
                >
                  {otherdata.icon}
                  <div className="list_dash">{otherdata.name}</div>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="weekly">
            <p> Weekly Report</p>
            <p className="weeklypargraph">
              Your weekly Report is ready for dawnload
            </p>
            <button onClick={handle}>Dawnload</button>
          </div>
        </div>
      </div>
      <Link to="/" className="logout">
        <CgLogOut className="logout-icon" style={{ color: "black" }} /> Logout
      </Link>
    </div>
  );
}

export default Sidebar