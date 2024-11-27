import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Loginform.css";
import { Notify } from "notiflix";
import axios from "axios";

function Loginform() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formDat, setFormDat] = useState({
    Email: "",
    FullName: "",
    Password: "",
    ConformPassword: "",
  });
  const [activeForm, setActiveForm] = useState("Youtuber");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormDat({ ...formDat, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/signin",
        formData
      );
      alert("Login successfully");
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
      console.log(res.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Notify.failure(error.response.data.message);
      } else {
        Notify.failure("An error occurred. Please try again.");
      }
    }
  };

  const handleSubm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/signin",
        formDat
      );
      alert("Login successfully");
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
      console.log(res.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Notify.failure(error.response.data.message);
      } else {
        Notify.failure("An error occurred. Please try again.");
      }
    }
  };

  const switchForm = (formType) => {
    setActiveForm(formType);
  };

  const renderForm = () => {
    if (activeForm === "Youtuber") {
      return (
        <form onSubmit={handleSubmit} className="loginform">
          <div className="login-email-password">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-login-input"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-login-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-login-checkbox">
            <div className="login-rember">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <Link to="forget" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button className="login-btn">Login</button>
        </form>
      );
    } else if (activeForm === "Client") {
      return (
        <form onSubmit={handleSubm} className="loginform">
          <div className="login-email-password">
            <input
              type="text"
              name="FullName"
              placeholder="FullName"
              className="form-login-input"
              value={formDat.FullName}
              onChange={handleChang}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="form-login-input"
              value={formDat.Email}
              onChange={handleChang}
              required
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="form-login-input"
              value={formDat.Password}
              onChange={handleChang}
              required
            />
            <input
              type="password"
              name="ConformPassword"
              placeholder="ConformPassword"
              className="form-login-input"
              value={formDat.ConformPassword}
              onChange={handleChang}
              required
            />
          </div>
          <div className="form-login-checkbox">
            <div className="login-rember">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                style={{ backgroundColor: "rgb(37,43,49)", color: "white" }}
              />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <Link to="forget" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-container-paragraph1">
        <div className="login-container-paragraph">
          <p className="login-container-paragraph12">Welcome to Access</p>
          <p>Transport</p>
        </div>
        <p>Company</p>
      </div>
      <div className="login-button-paragraph">
        <div className="login-register">
          <button
            id="buttons"
            onClick={() => switchForm("Youtuber")}
            className={`login-register-login ${
              activeForm === "Youtuber" ? "active-login-button" : ""
            }`}
          >
            Login
          </button>
          <button
            id="buttons"
            onClick={() => switchForm("Client")}
            className={`login-register-login ${
              activeForm === "Client" ? "active-login-button" : ""
            }`}
          >
            Register
          </button>
        </div>
        <p>Enter your details to get access</p>
      </div>
      {renderForm()}
    </div>
  );
}

export default Loginform;
