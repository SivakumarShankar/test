import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-body-tertiary text-muted bg-warning">
        <section class="d-flex container justify-content-lg-between pt-4 bg-warning">
          <div class="me-5 d-none d-lg-block">
            <h6 class="fw-bold mb-4">
              CONTACT :{""}
              <span>
                {" "}
                <FontAwesomeIcon icon={faMapMarkedAlt} />{" "}
                <Link
                  to="https://www.google.com/maps/place/London/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  London, United Kingdom
                </Link>{" "}
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <Link
                  to="https://gmail.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  sibisiva17@gmail.com
                </Link>{" "}
                <FontAwesomeIcon icon={faPhone} />+ 44 7424972701
              </span>
            </h6>
          </div>

          <div class="me-5">
            <span>Get connected with us on social networks: </span>
            <SocialIcon
              url="https://www.linkedin.com/in/sivakumarshankarkumar/" target="_blank"
              style={{ height: 35, width: 35, marginBottom: 10 }}
            />
            <SocialIcon
              url="https://www.instagram.com/sivakumar_shankar?igsh=MWRhczd1MjR4MHoxNg%3D%3D&utm_source=qr" target="_blank"
              style={{ height: 35, width: 35, marginBottom: 10 }}
            />
            <SocialIcon
              url="https://api.whatsapp.com/send?phone=7424972701" target="_blank"
              style={{ height: 35, width: 35, marginBottom: 10 }}
            />
            <SocialIcon
              url="https://www.facebook.com/share/oCnmyzzgGFsKe68x/?mibextid=LQQJ4d" target="_blank"
              style={{ height: 35, width: 35, marginBottom: 10 }}
            />
          </div>
        </section>

        {/* <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg> &#xF249; Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="https://google.com" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div> */}
        {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="https://google.com" class="text-reset">
                    Help
                  </a>
                </p>
              </div> */}
        {/* <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> London, United Kingdom
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  <i class="bi bi-file-earmark-code-fill"></i>
                  sibisiva17@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 44 7424972701
                </p>
              </div>
            </div>
          </div>
        </section>  */}
        {/* <div class="text-center p-4">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> */}
      </footer>
    </div>
  );
};

export default Footer;
