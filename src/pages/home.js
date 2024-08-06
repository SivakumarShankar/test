import React from "react";
import { Link } from "react-router-dom";
import logo from "./profilecopy.png";
import {} from "../pages/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./footer";
import AnimatedCard from "./animatedcard";
import "../pages/animation.css";

const Home = () => {
  return (
    <div class="body">
      <div class="text-center pt-5">
        <h4 class="lh-base pt-5">HELLO EVERYONE, I AM</h4>
        <h1 class="name lh-base">Sivakumar Shankar Kumar</h1>
        <h3 class="col-md-6 offset-md-3 lh-base pb-5">
          A dedicated full-stack developer with a Master’s in Computer Science
          and over three years of experience. I specialize in{" "}
          <span style={{ color: "#fba61b" }}>AWS</span>,{" "}
          <span style={{ color: "#fba61b" }}>React.JS</span> and{" "}
          <span style={{ color: "#fba61b" }}>Node.JS</span>, creating innovative
          solutions and optimizing performance. Let's connect and explore new
          opportunities for impactful technology solutions!
        </h3>
      </div>

      <img
        src={logo}
        class="image rounded-circle mx-auto d-block img-thumbnail"
        alt="..."
      />

      <div class="row1 col-md-3">
        <div class="container my-4 p-0">
          <div class="row container-fluid px-0 my-3 ">
            <div class="col d-flex justify-content-center">
              <Link
                to="/files/SivakumarShankarResume.pdf"
                class="circleBase type3"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                download
              >
                Resume
              </Link>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="circleBase type3">My Skills</div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="circleBase type3">Project</div>
            </div>
            <div class="col d-flex justify-content-center">
              <Link
                to="/contact"
                class="circleBase type3"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid colour pt-4">
        <div className="container pb-4">
          <div className="row">
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">01</h1>
                  <h3 className="text-blue">Innovative</h3>
                  <p class="card-text">
                    With a knack for developing innovative full-stack web
                    applications, I leverage technologies like React.js and
                    Node.js to create efficient, scalable solutions that enhance
                    user experience and performance.
                  </p>
                  <a
                    href="https://google.com"
                    class="btn btn-custom text-capitalize"
                  >
                    MORE
                  </a>
                </div>
              </AnimatedCard>
            </div>
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">02</h1>
                  <h3 className="text-blue">Collaborative</h3>
                  <p class="card-text">
                    Experienced in working with cross-functional teams, I excel
                    in collaborative environments, ensuring seamless
                    communication and effective project delivery, as
                    demonstrated in my roles as a developer.
                  </p>
                  <a
                    href="https://google.com"
                    class="btn btn-custom text-capitalize"
                  >
                    MORE
                  </a>
                </div>
              </AnimatedCard>
            </div>
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">03</h1>
                  <h3 className="text-blue">Adaptive</h3>
                  <p class="card-text">
                    Thriving in dynamic startup settings, I quickly adapt to new
                    challenges, driving rapid development cycles and delivering
                    impactful solutions, particularly in cloud-based (Amazon Web
                    Services) and automation projects.
                  </p>
                  <a
                    href="https://google.com"
                    class="btn btn-custom text-capitalize"
                  >
                    MORE
                  </a>
                </div>
              </AnimatedCard>
            </div>
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">04</h1>
                  <h3 className="text-blue">Detail-Oriented</h3>
                  <p class="card-text">
                    My meticulous attention to detail ensures high-quality code
                    and robust system performance. I consistently implement best
                    practices and conduct thorough code reviews to maintain and
                    improve development standards.
                  </p>
                  <a
                    href="https://google.com"
                    class="btn btn-custom text-capitalize"
                  >
                    MORE
                  </a>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
