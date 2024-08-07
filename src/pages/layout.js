import { Outlet, Link } from "react-router-dom";
import React from "react";
import { } from "../pages/styles.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = () => {
  return (
    <>
      <nav class="navbar header fixed-top">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand fw-bolder">Sivakumar Profile</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Options
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <li class="navbar-nav mr-auto nav-item nav-link">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
              </li>
              <li class="navbar-nav mr-auto nav-item nav-link">
                <Link to="/skills" style={{ textDecoration: "none", color: "black" }}>Skills</Link>
              </li>
              <li class="navbar-nav mr-auto nav-item nav-link">
                <Link to="/github" style={{ textDecoration: "none", color: "black" }}>Website Info</Link>
                </li>
              <li class="navbar-nav mr-auto nav-item nav-link">
                <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</Link>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;