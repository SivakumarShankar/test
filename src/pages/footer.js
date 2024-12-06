import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-warning text-dark py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Contact Section */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-1">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />
              <Link
                to="https://www.google.com/maps/place/London/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                London, UK
              </Link>
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <Link
                to="mailto:sibisiva17@gmail.com"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                sibisiva17@gmail.com
              </Link>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              +44 7424 972701
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h6 className="fw-bold">Follow Me</h6>
            <div className="d-flex justify-content-center">
              <SocialIcon
                url="https://www.linkedin.com/in/sivakumarshankarkumar/"
                target="_blank"
                className="mx-2"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://www.instagram.com/sivakumar_shankar/"
                target="_blank"
                className="mx-2"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://api.whatsapp.com/send?phone=7424972701"
                target="_blank"
                className="mx-2"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://www.facebook.com/share/oCnmyzzgGFsKe68x/"
                target="_blank"
                className="mx-2"
                style={{ height: 40, width: 40 }}
              />
            </div>
          </div>

          {/* Newsletter or Extra Info */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold">Send Email</h6>
            <p>Sign up here.</p>
            <form className="d-flex justify-content-center justify-content-md-end">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your Message"
                style={{ maxWidth: "200px" }}
              />
              <button className="btn btn-dark" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
