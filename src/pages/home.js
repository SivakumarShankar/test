import React from "react";
import logo from "./profilecopy.png";
import {} from "../pages/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './footer';

const Home = () => {
  return (
    <div class="body">
      <div class="text-center">
        <h4 class="lh-base">HELLO EVERYBODY, I AM</h4>
        <h1 class="name lh-base">Sivakumar Shankar Kumar</h1>
        <h3 class="col-md-6 offset-md-3 lh-base">
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
      <div class="container1 my-4 p-0">
          <div class="row container-fluid px-0 my-3 ">
            <div class="col d-flex justify-content-center">
              <div class="circleBase type3">Resume</div>
            </div>
            <div class="col d-flex justify-content-center">
            <div class="circleBase type3">My Skills</div>
            </div>
            <div class="col d-flex justify-content-center">
            <div class="circleBase type3">Project</div>
            </div>
            <div class="col d-flex justify-content-center">
            <div class="circleBase type3">Contact</div>

            </div>

          </div>
        
          
          
        </div>

        <div class="row container-fluid">
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
          
        </div>
        
        
      </div>
      <div class="">
<p>This is footer</p>
      </div>
<Footer />
     </div>
  );
};

export default Home;
