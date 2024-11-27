import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import {
  IoIosSettings,
  IoIosNotifications,
  IoMdKey,
  IoMdHeart,
} from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import "../styles/Setting.css";
import { Link, NavLink, Outlet } from "react-router-dom";
function Setting() {
  const upLinks = [
    {
      icon: <IoIosSettings className="settingicon" />,
      path: "settingform",
      name: "Settings",
      paragraph: "Access The General Settings",
    },
    {
      icon: <BsFillPersonFill className="settingicon" />,
      path: "account",
      name: "Account",
      paragraph: "Edit Your Password Information",
    },
    {
      icon: <IoIosNotifications className="settingicon" />,
      path: "notification",
      name: "Notification",
      paragraph: "Control Your Notification History",
    },
    {
      icon: <MdLanguage className="settingicon" />,
      path: "changelanguage",
      name: " Language",
      paragraph: "Change Your Language",
    },
    {
      icon: <IoMdKey className="settingicon" />,
      path: "changepassword",
      name: "ChangePassword",
      paragraph: "Access To Your Account Password",
    },
    {
      icon: <IoMdHeart className="settingicon" />,
      path: "license",
      name: "License",
      paragraph: "Terms and Conditions",
    },
    {
      icon: <RiSecurePaymentFill className="settingicon" />,
      path: "paymentmethod",
      name: "PaymentMethod",
      paragraph: "Means Of Payments",
    },
  ];
  return (
    <div className="settings-pagraph-card">
      <div className="setting-pagraph">
        <p className="setting-pagraph-par1">Settings </p>
        <p className="setting-pagraph-par2">
          Get Your Latest Updates For Last 7days{" "}
        </p>
      </div>
      <div className="settings">
        <div className="settingcard">
          {upLinks.map((settinglink) => (
            <NavLink
              to={settinglink.path}
              className={({ isActive }) =>
                isActive ? "pageactive" : "settingpage"
              }
            >
              <div className="">{settinglink.icon}</div>
              <div className="setting-page-link">
                <div className="setting-page-link-link">{settinglink.name}</div>
                <div className="settingparagraph2">{settinglink.paragraph}</div>
              </div>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Setting;
