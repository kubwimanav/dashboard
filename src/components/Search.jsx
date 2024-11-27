import React from 'react'
import { Link, NavLink } from "react-router-dom";
import '../styles/Search.css'
function Search({ handlemodal}) {
      const menu = [
        {
          path: "dashboard",
          name: "Dashboard",
        },
        {
          path: "carreport",
          name: "Listening",
        },
        {
          path: "deal",
          name: "Deals",
        },
        {
          path: "activecar",
          name: " Activecar",
        },
        {
          path: "payments",
          name: " Payments Details",
        },
        {
          path: "settings",
          name: "Settings",
        },
        {
          path: "service",
          name: "Services",
        },
        {
          path: "helpCenter",
          name: "Help Center",
        },
      ];
  return (
   
        <div className='search'>
              {menu.map((menudata) => (
                <NavLink
                  to={menudata.path}
                  className={({ isActive }) =>
                    isActive ? "linkside-active" : "linkside"
                  }
                >
                  <div className="list_dash" onClick={handlemodal}>{menudata.name}</div>
                </NavLink>
              ))}
        </div>
     
  )
}

export default Search