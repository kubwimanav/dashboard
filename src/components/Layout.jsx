import React from 'react'
import Sidebar from './Sidebar'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import headerimage from '/profile-layout.png'
import DashHome from './DashHome'
import '../styles/Layout.css'
import "../styles/Navbar.css";
import Payment from './Payment'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="layout">
      <div className="sidebar-component">
        <Sidebar/>
      </div>
      <div className="navsearch">
        <Navbar  />
      </div>
      <div className="header-outlet">
        <div className="layout-icon-input">
          <input type="text" placeholder="Quick search for every thing" />
          <div className="icon-image">
            <IoIosNotifications className="icon-layout" />
            <div className="layout-image-paragraph">
              <img src={headerimage} alt="" className="layout-image" />
              <p>Clay Jesen</p>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout