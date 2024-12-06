import React from "react";
import { Link } from "react-router-dom";
import logo from "./profilecopy.png";
import devopsimg from "../images/image.png";
import nodejs from "../images/nodejs.svg";
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
      <div className="container-fluid bg-warning pt-4">
        <div className="container pb-4">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <AnimatedCard>
                <div className="card-container p-3 text-center bg-light rounded shadow">
                  <h1 className="card-title fw-bolder text-yellow">01</h1>
                  <h4 className="text-blue fw-bold">Innovative</h4>
                  <p className="card-text">
                    With a knack for developing innovative full-stack web
                    applications, I leverage technologies like React.js and
                    Node.js to create efficient, scalable solutions that enhance
                    user experience and performance.
                  </p>
                  <Link
                    to="/skills"
                    className="btn btn-custom text-capitalize text-white"
                    style={{ textDecoration: "none" }}
                  >
                    More
                  </Link>
                </div>
              </AnimatedCard>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <AnimatedCard>
                <div className="card-container p-3 text-center bg-light rounded shadow">
                  <h1 className="card-title fw-bolder text-yellow">02</h1>
                  <h4 className="text-blue fw-bold">Collaborative</h4>
                  <p className="card-text">
                    Experienced in working with cross-functional teams, I excel
                    in collaborative environments, ensuring seamless
                    communication and effective project delivery, as
                    demonstrated in my roles as a developer.
                  </p>
                  <Link
                    to="/skills"
                    className="btn btn-custom text-capitalize text-white"
                    style={{ textDecoration: "none" }}
                  >
                    More
                  </Link>
                </div>
              </AnimatedCard>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <AnimatedCard>
                <div className="card-container p-3 text-center bg-light rounded shadow">
                  <h1 className="card-title fw-bolder text-yellow">03</h1>
                  <h4 className="text-blue fw-bold">Adaptive</h4>
                  <p className="card-text">
                    Thriving in dynamic startup settings, I quickly adapt to new
                    challenges, driving rapid development cycles and delivering
                    impactful solutions, particularly in cloud-based (Amazon Web
                    Services) and automation projects.
                  </p>
                  <Link
                    to="/skills"
                    className="btn btn-custom text-capitalize text-white"
                    style={{ textDecoration: "none" }}
                  >
                    More
                  </Link>
                </div>
              </AnimatedCard>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <AnimatedCard>
                <div className="card-container p-3 text-center bg-light rounded shadow">
                  <h1 className="card-title fw-bolder text-yellow">04</h1>
                  <h4 className="text-blue fw-bold">Detail-Oriented</h4>
                  <p className="card-text">
                    My meticulous attention to detail ensures high-quality code
                    and robust system performance. I consistently implement best
                    practices and conduct thorough code reviews to maintain and
                    improve development standards.
                  </p>
                  <Link
                    to="/skills"
                    className="btn btn-custom text-capitalize text-white"
                    style={{ textDecoration: "none" }}
                  >
                    More
                  </Link>
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
          <div className="profile-left-column">
  <div className="profile-item">
    <h5 className="text-uppercase">Name</h5>
    <p className="fw-bold">Sivakumar</p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Birthday</h5>
    <p className="fw-bold">11.03.1997</p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Role</h5>
    <p className="fw-bold">Software Developer</p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Email</h5>
    <p className="fw-bold">
      <a href="mailto:sibisiva17@gmail.com">sibisiva17@gmail.com</a>
    </p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Phone</h5>
    <p className="fw-bold">(+44) 7424 972701</p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Website</h5>
    <p className="fw-bold">
      <a href="https://sivakumarshankarkumar.com" target="_blank" rel="noopener noreferrer">
        sivakumarshankarkumar.com
      </a>
    </p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Location</h5>
    <p className="fw-bold">London, UK</p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Interests</h5>
    <p className="fw-bold">Movies, Games</p>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Social</h5>
    <div className="social-icons">
      <SocialIcon
        url="https://www.linkedin.com/in/sivakumarshankarkumar/"
        target="_blank"
        className="social-icon"
      />
      <SocialIcon
        url="https://www.instagram.com/sivakumar_shankar/"
        target="_blank"
        className="social-icon"
      />
      <SocialIcon
        url="https://api.whatsapp.com/send?phone=7424972701"
        target="_blank"
        className="social-icon"
      />
      <SocialIcon
        url="https://www.facebook.com/share/oCnmyzzgGFsKe68x/?mibextid=LQQJ4d"
        target="_blank"
        className="social-icon"
      />
    </div>
  </div>

  <div className="profile-item">
    <h5 className="text-uppercase">Nationality</h5>
    <p className="fw-bold">Indian</p>
  </div>
</div>

          </div>
          <div class="col fw-bolder number">
            <div className="container text-center overflow-hidden">
              <div className="row g-3">
                {/* First Row */}
                <div className="col-12 col-sm-6">
                  <div className="rounded bg-light text-dark p-3">
                    <p className="text-blue text-uppercase">Award Won</p>
                    <CountUp
                      end={4}
                      duration={5}
                      suffix=" +"
                      className="counter"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="rounded bg-light text-dark p-3">
                    <p className="text-uppercase text-blue">Projects</p>
                    <CountUp
                      end={3}
                      duration={5}
                      suffix=" +"
                      className="counter"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="col-12 col-sm-6">
                  <div className="rounded bg-light text-dark p-3">
                    <p className="text-uppercase text-blue">Clients</p>
                    <CountUp
                      end={7}
                      duration={5}
                      suffix=" +"
                      className="counter"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="rounded bg-light text-dark p-3">
                    <p className="text-uppercase text-blue">XP Years</p>
                    <CountUp
                      end={4}
                      duration={5}
                      suffix=" +"
                      className="counter"
                    />
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

      <div class="container">
        <div class="main-timeline">
        <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2024</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Freelance Entrepreneur & Website Developer</h5>
              <p class="description">
              During this year, I developed my own personal website and worked on a variety of small freelance projects. This experience allowed me to sharpen my skills in web development, design, and project management, while also gaining valuable insights into the entrepreneurial side of the tech industry              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2022</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Expanding Horizons</h5>
              <p class="description">
              Taking a 1-year study break, I pursued my Master's in Computer Science in London, deepening my understanding of advanced computing concepts and engaging in hands-on projects to enhance my technical skills and knowledge
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2022</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Full Stack Developer</h5>
              <p class="description">
              As a Full Stack Developer at Bytize Technology for 1 year, I worked with a talented team, gaining valuable knowledge in new technologies and contributing to key improvements in our projects.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">6 Months</span>
                  <span class="year">2021</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Software Developer</h5>
              <p class="description">
              As a Software Developer, I specialized in AWS technologies, leading a team of 4 to deliver impactful projects. My focus was on optimizing infrastructure, implementing DevOps practices, and ensuring seamless cloud-based solutions for efficient performance.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1.7 Years</span>
                  <span class="year">2018</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Relationship Manager</h5>
              <p class="description">
              As a Relationship Manager, I successfully managed over 100 clients and 4 projects over the course of 1.7 years. My role involved fostering client relationships, ensuring project delivery, and driving customer satisfaction to exceed expectations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center flex-wrap pb-5">
        {/* First Row */}
        <div className="row pb-3 justify-content-center">
          <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              className="image w-75 mx-auto d-block"
              alt="React Native Logo"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
              src={nodejs}
              className="image w-75 mx-auto d-block"
              alt="Node.js Logo"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
              src={devopsimg}
              className="image w-75 mx-auto d-block pt-5 pb-5"
              alt="DevOps"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="row justify-content-center">
          <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
              src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt0462ae8bbfea7451/64d2713b646ccd3df08229a7/lgwpl72akptbke7gp-AWS_logo_RGB.svg"
              className="image w-75 mx-auto d-block"
              alt="AWS Logo"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
              src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt656769ac48060ba9/667ee74b66137ca874adb4cd/google_cloud.svg"
              className="image rounded-circle w-75 mx-auto d-block"
              alt="Google Cloud Logo"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress"
              className="image w-75 mx-auto d-block"
              alt="MongoDB Logo"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
