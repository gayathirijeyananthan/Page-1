import React from "react";
import logo from "../assets/logo.png";
import "../components/css/Nav.css";

export const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#ffff", height: "90px", position: "fixed" }}
    >
      <div className="container-fluid" style={{ marginTop: "40px" }}>
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
            style={{ justifyContent: "center", marginLeft: "300px" }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{}}
              >
                Courses{" "}
              </a>
            </li>
            <span
              class="material-symbols-outlined"
              style={{ paddingTop: "8px" }}
            >
              arrow_drop_down
            </span>

            <li className="nav-item">
              <a className="nav-link active" href="#" style={{}}>
                Teachers{" "}
              </a>
            </li>
            <span
              class="material-symbols-outlined"
              style={{ paddingTop: "8px" }}
            >
              arrow_drop_down
            </span>

            <li className="nav-item">
              <a className="nav-link active" href="#" style={{}}>
                Offers{" "}
              </a>
            </li>
            <span
              class="material-symbols-outlined"
              style={{ paddingTop: "8px" }}
            >
              arrow_drop_down
            </span>

            <li className="nav-item">
              <a className="nav-link active" href="#" style={{}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search" style={{marginLeft:"700px"}}>
          <div style={{marginLeft:"20px"}}>
          <button
            className="btn custom"
            style={{
              position: "relative",
              background: "linear-gradient(to right, #6C48C5, #ED3EF7)", // Gradient for border effect
              cursor: "pointer",
              padding: "1px 1px",
              borderRadius: "5px", // Optional: rounded corners
              border: "none", // Remove default border
              backgroundClip: "padding-box",
              display: "inline-block",
            }}
            type="submit"
          >
            <span
              style={{
                background: "#fff", // Button background color
                padding: "10px 20px",
                display: "inline-block",
                borderRadius: "3px", // Inner button rounding
                fontWeight:"bold"

              }}
            >
              SignIn
            </span>
          </button>
          </div>

          <button
            className="btn custom"
            style={{
              background: "linear-gradient(to right, #6C48C5, #ED3EF7)", // Gradient background
              color: "white", // Set text color to white for better contrast
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              marginLeft: "20px",
              fontWeight:"bold"
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
