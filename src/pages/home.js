import React from "react";
import { Link } from "react-router-dom";
import logo from "./profilecopy.png";
import {} from "../pages/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./footer";
import AnimatedCard from "./animatedcard";
import "../pages/animation.css";
import { SocialIcon } from "react-social-icons";
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
                style={{ textDecoration: "none" }}
                download
              >
                Resume
              </Link>
            </div>
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/skills"
                class="circleBase type3 text-yellow"
                style={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </div>
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/project"
                class="circleBase type3 text-blue"
                style={{ textDecoration: "none" }}
              >
                Project
              </Link>
            </div>
            <div class="col d-flex justify-content-center fw-bold">
              <Link
                to="/contact"
                class="circleBase type3 text-yellow"
                style={{ textDecoration: "none" }}
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
                  <h4 className="text-blue fw-bold">Innovative</h4>
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
                  <h4 className="text-blue fw-bold">Collaborative</h4>
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
                  <h4 className="text-blue fw-bold">Adaptive</h4>
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
                  <h4 class="text-blue fw-bold">Detail-Oriented</h4>
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

      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col">
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
              <p class="fw-bold">
                <SocialIcon
                  url="https://www.linkedin.com/in/sivakumarshankarkumar/"
                  target="_blank"
                  style={{ height: 35, width: 35}}
                />
                <SocialIcon
                  url="https://www.instagram.com/sivakumar_shankar?igsh=MWRhczd1MjR4MHoxNg%3D%3D&utm_source=qr"
                  target="_blank"
                  style={{ height: 35, width: 35}}
                />
                <SocialIcon
                  url="https://api.whatsapp.com/send?phone=7424972701"
                  target="_blank"
                  style={{ height: 35, width: 35,}}
                />
                <SocialIcon
                  url="https://www.facebook.com/share/oCnmyzzgGFsKe68x/?mibextid=LQQJ4d"
                  target="_blank"
                  style={{ height: 35, width: 35,}}
                />
              </p>
              <h5>NATIONALITY</h5>
              <p class="fw-bold">Indian</p>
            </div>
          </div>
          <div class="col fw-bolder number">
            <div class="row">
              <div class="container overflow-hidden text-center">
                <div class="row gap-3 pb-3">
                  <div class="col rounded bg-light text-dark">
                    <div class="p-3 number">
                      <p class="text-blue text-uppercase">Award Won</p>
                      <CountUp
                        end={4}
                        duration={5}
                        suffix=" +"
                        className="counter"
                      ></CountUp>
                    </div>
                  </div>
                  <div class="col rounded bg-light text-dark">
                    <div class="p-3">
                      <p class="text-uppercase text-blue">Projects</p>
                      <CountUp
                        end={3}
                        duration={5}
                        suffix=" +"
                        className="counter"
                      ></CountUp>
                    </div>
                  </div>
                </div>
                <div class="row gap-3">
                  <div class="col rounded bg-light text-dark">
                    <div class="p-3">
                      <p class="text-uppercase text-blue">clients</p>
                      <CountUp
                        end={7}
                        duration={5}
                        suffix=" +"
                        className="counter"
                      ></CountUp>
                    </div>
                  </div>
                  <div class="col rounded bg-light text-dark">
                    <div class="p-3">
                      <p class="text-uppercase text-blue">xp years</p>
                      <CountUp
                        end={4}
                        duration={5}
                        suffix=" +"
                        className="counter"
                      ></CountUp>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <h1 class="text-yellow text-center">A bit more about me.</h1>
              <p>
                <p class="lh-lg text-center">
                  During my career, I've had the opportunity to work with
                  diverse teams and innovative projects. At Bytize Inc., I
                  contributed to a{" "}
                  <span class="text-yellow">20% reduction in load times </span>
                  for web applications through performance optimizations. My
                  tenure at Aikyne Technology saw me designing cloud-based
                  solutions that boosted production{" "}
                  <span class="text-yellow">automation by 25%</span>, along with
                  leading efforts in infrastructure optimization and security
                  best practices.
                  <br></br>
                  My academic journey includes a Master’s in Computer Science
                  from the University of East London, where I expanded my
                  knowledge in advanced computing concepts and hands-on
                  projects. Prior to that, I earned a Bachelor of Engineering in
                  Computer Science from Agni College of Technology in Chennai.
                  <br></br>
                  Outside the professional sphere, I am a tech enthusiast who
                  enjoys exploring new technologies and their potential
                  applications. I am eager to leverage my skills and experiences
                  in a forward-thinking team, driving innovative projects to
                  success..
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
