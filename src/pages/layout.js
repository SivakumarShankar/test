import { Outlet, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "bootstrap"; // Import Offcanvas from Bootstrap

const Layout = () => {
  const closeOffcanvas = () => {
    try {
      const offcanvas = document.querySelector(".offcanvas.show");
      if (offcanvas) {
        // Use Bootstrap's Offcanvas instance to hide the component
        const bootstrapOffcanvas = Offcanvas.getInstance(offcanvas) || new Offcanvas(offcanvas);
        bootstrapOffcanvas.hide();
  
        // Manually remove any leftover backdrop
        const backdrops = document.querySelectorAll(".offcanvas-backdrop");
        backdrops.forEach((backdrop) => backdrop.remove());
  
        // Reset body styles for overflow and padding
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
  
        // Remove offcanvas-open class from the body
        document.body.classList.remove("offcanvas-open");
        
        // Make sure the modal-open class (if any) is also removed
        document.body.classList.remove("modal-open");
      }
    } catch (error) {
      console.error("Error closing the offcanvas:", error);
    }
  };
  
  

  return (
    <>
      <nav className="navbar header sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bolder">
            Sivakumar Profile
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ backgroundColor: "#fba61b" }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Options
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={closeOffcanvas}
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/skills"
                    onClick={closeOffcanvas}
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/github"
                    onClick={closeOffcanvas}
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Website Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    onClick={closeOffcanvas}
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
