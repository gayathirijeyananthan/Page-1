import React from "react";
import logo from "../assets/logo.png";
import "../components/css/Nav.css";

export const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#6A1E55", height: "90px" }}
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
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ justifyContent: "center" }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "#FF9C73" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#FF9C73" }}>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#FF9C73" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn custom"
            style={{
              border: "2px solid #FF9C73",
              color: "#FF9C73",
              cursor: "pointer",
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
