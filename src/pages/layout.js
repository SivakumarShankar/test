import { Outlet, Link } from "react-router-dom";
import React from "react";
import { } from "../pages/styles.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = () => {
  return (
    <>
      <nav class="navbar header">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://google.com">
            Sivakumar Profile
          </a>
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
                <Link to="/">Home</Link>
              </li>
              <li class="navbar-nav mr-auto nav-item nav-link">
                <Link to="/contact">Contact</Link>
              </li>
              <li class="navbar-nav mr-auto nav-item nav-link">
                <Link to="/error">Error</Link>
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