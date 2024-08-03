import React from "react";
import { Link } from "react-router-dom";
import logo from "./profilecopy.png";
import {} from "../pages/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./footer";

const Home = () => {
  return (
    <div class="body">
      <div class="text-center pt-5">
        <h4 class="lh-base pt-5">HELLO EVERYONE, I AM</h4>
        <h1 class="name lh-base">Sivakumar Shankar Kumar</h1>
        <h3 class="col-md-6 offset-md-3 lh-base pb-5">
          Welcome to my personal website! I am Sivakumar, a passionate software
          developer based in London. With a keen interest in coding and
          exploring the vibrant tech landscape, I specialize in front-end
          development, creating intuitive and dynamic user experiences.
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
              <Link to="/files/SivakumarShankarResume.pdf"class="circleBase type3" target="_blank" style={{textDecoration:"none", color:"black"}}download>Resume</Link>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="circleBase type3">My Skills</div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="circleBase type3">Project</div>
            </div>
            <div class="col d-flex justify-content-center">
            <Link to="/contact"class="circleBase type3" style={{textDecoration:"none", color:"black"}}>Contact</Link>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="col-sm-auto mb-auto mb-sm-auto">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fw-bolder text-yellow">01</h1>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://google.com"
                  class="btn btn-custom text-capitalize"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-auto mb-auto mb-sm-auto">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fw-bolder text-yellow">02</h1>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://google.com"
                  class="btn btn-custom text-capitalize"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-auto mb-auto mb-sm-auto">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fw-bolder text-yellow">03</h1>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://google.com"
                  class="btn btn-custom text-capitalize"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
