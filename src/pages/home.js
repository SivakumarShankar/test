import React from "react";
import { Link } from "react-router-dom";
import logo from "./profilecopy.png";
import {} from "../pages/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./footer";
import AnimatedCard from "./animatedcard";
import "../pages/animation.css";
import CountUp from "react-countup";

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
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/files/SivakumarShankarResume.pdf"
                class="circleBase type3 text-blue"
                target="_blank"
                style={{ textDecoration: "none"}}
                download
              >
                Resume
              </Link>
            </div>
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/skills"
                class="circleBase type3 text-yellow"
                style={{ textDecoration: "none"}}
              >
                Skills
              </Link>
            </div>
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/project"
                class="circleBase type3 text-blue"
                style={{ textDecoration: "none"}}
              >
                Project
              </Link>
            </div>
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/contact"
                class="circleBase type3 text-yellow"
                style={{ textDecoration: "none"}}
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
                  <h4 className="text-blue">Innovative</h4>
                  <p class="card-text">
                    With a knack for developing innovative full-stack web
                    applications, I leverage technologies like React.js and
                    Node.js to create efficient, scalable solutions that enhance
                    user experience and performance.
                  </p>

                  <li class="btn btn-custom text-capitalize">
                    <Link
                      to="/skills"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      MORE
                    </Link>
                  </li>
                </div>
              </AnimatedCard>
            </div>
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">02</h1>
                  <h4 className="text-blue">Collaborative</h4>
                  <p class="card-text">
                    Experienced in working with cross-functional teams, I excel
                    in collaborative environments, ensuring seamless
                    communication and effective project delivery, as
                    demonstrated in my roles as a developer.
                  </p>
                  <li class="btn btn-custom text-capitalize">
                    <Link
                      to="/skills"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      MORE
                    </Link>
                  </li>
                </div>
              </AnimatedCard>
            </div>
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">03</h1>
                  <h4 className="text-blue">Adaptive</h4>
                  <p class="card-text">
                    Thriving in dynamic startup settings, I quickly adapt to new
                    challenges, driving rapid development cycles and delivering
                    impactful solutions, particularly in cloud-based (Amazon Web
                    Services) and automation projects.
                  </p>
                  <li class="btn btn-custom text-capitalize">
                    <Link
                      to="/skills"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      MORE
                    </Link>
                  </li>
                </div>
              </AnimatedCard>
            </div>
            <div className="col">
              <AnimatedCard>
                <div className="card-container">
                  <h1 class="card-title fw-bolder text-yellow">04</h1>
                  <h4 class="text-blue">Detail-Oriented</h4>
                  <p class="card-text">
                    My meticulous attention to detail ensures high-quality code
                    and robust system performance. I consistently implement best
                    practices and conduct thorough code reviews to maintain and
                    improve development standards.
                  </p>
                  <li class="btn btn-custom text-capitalize">
                    <Link
                      to="/skills"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      MORE
                    </Link>
                  </li>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>

      {/* End of Card */}







      <div class="container-fluid pt-5 pb-5">
        <div class="container d-flex">
        <div class="left-column">
            <h5>NAME</h5>
            <p class="fw-bold">Sivakumar</p>
            <h5>BIRTHDAY</h5>
            <p class="fw-bold">11.03.1997</p>
            <h5>ROLE</h5>
            <p class="fw-bold">Software Developer</p>
            <h5>EMAIL</h5>
            <p class="fw-bold">sibisiva17@gmail.com</p>
            <h5>PHONE</h5>
            <p class="fw-bold">(+44) 7424 972701</p>
            <h5>WEBSITE</h5>
            <p class="fw-bold">sivakumarshankarkumar.com</p>
            <h5>LOCATION</h5>
            <p class="fw-bold">London, UK</p>
            <h5>INTEREST</h5>
            <p class="fw-bold">Movies, Games</p>
            <h5>SOCIAL</h5>
            <p class="fw-bold">fb,twiter,linkedin</p>
        </div>
        <div class="right-column text-dark">
            <div class="box">
                <p>Box 1</p>
                <div class="box-text"><CountUp end={100} duration={10}></CountUp></div>
            </div>
            <div class="box">
                <p>Box 2</p>
                <div class="box-text">Text below Box 2</div>
            </div>
            <div class="box">
                <p>Box 3</p>
                <div class="box-text">Text below Box 3</div>
            </div>
            <div class="box">
                <p>Box 4</p>
                <div class="box-text">Text below Box 4</div>
            </div>
        </div>
        </div>
       
    </div>













    


      <Footer />
    </div>
  );
};



export default Home;
