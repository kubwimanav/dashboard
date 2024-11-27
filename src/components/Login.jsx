import React from 'react'
import profile from "/key.png";
import imagelogin from "/Rectangle 150.png";
import '../styles/Login.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
function Login() {

  const navigate = useNavigate();

    return (
      <div className="login">
        <div className="login-log-image">
          <div>
            <div className="profile1-login">
              <div className="profile-loginprofile">
                <img src={profile} />
              </div>
              <div className="profile-login-para">
                <p className="profile-login-para1">Access Transport</p>
                <p className="profile-login-para2"> Company</p>
              </div>
            </div>
          </div>
          <div>
            <img src={imagelogin} alt="" className="loginimage" />
          </div>
          <div className="login-log-image-paragraph">
            {" "}
            <p>Find And Book The Best</p>
            <div className="login-log-image-paragraph1">
              <p className="login-logo-image-paragraph-car">Cars</p>
              <p>Easily</p>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    );
}

export default Login