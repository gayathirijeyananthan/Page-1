import React from "react";
import logo from "../assets/logo.png";
import "../components/css/Nav.css";

export const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#ffff",
        height: "90px",
        position: "fixed",
        width: "100%",
      }}
    >
      <div className="container-fluid">
        <img src={logo} alt="logo" className="navbar-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center mx-auto"
            style={{ listStyleType: "none", padding: "0" }}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Courses
              </a>
            </li>
            <span class="material-symbols-outlined" style={{marginTop:"10px"}}>arrow_drop_down</span>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Teachers
              </a>
            </li>
            <span class="material-symbols-outlined" style={{marginTop:"10px"}}>arrow_drop_down</span>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Offers
              </a>
            </li>
            <span class="material-symbols-outlined" style={{marginTop:"10px"}}>arrow_drop_down</span>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form
          className="d-flex ms-auto"
          role="search"
          style={{ marginRight: "200px" }}
        >
          <div className="d-flex align-items-center">
            <button
              className="btn custom"
              style={{
                position: "relative",
                background: "linear-gradient(to right, #6C48C5, #ED3EF7)",
                cursor: "pointer",
                padding: "2px 2px",
                borderRadius: "5px",
                border: "none",
                backgroundClip: "padding-box",
                display: "inline-block",
              }}
              type="submit"
            >
              <span
                style={{
                  background: "#fff",
                  padding: "10px 20px",
                  display: "inline-block",
                  borderRadius: "3px",
                  fontWeight: "bold",
                }}
              >
                SignIn
              </span>
            </button>
          </div>
          <button
            className="btn custom ms-3"
            style={{
              background: "linear-gradient(to right, #6C48C5, #ED3EF7)",
              color: "white",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Free Trial
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
