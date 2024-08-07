import React from "react";
import Footer from "./footer";
import {} from "../pages/styles.css";

const Skills = () => {
  return (
    <div class="container-fluid body pt-5">
      <div class="container pt-5">
        <dl class="row">
          <h2>Skills</h2>
          <p>
            As a Full-Stack Developer with a strong focus on both frontend and
            backend technologies, I bring a diverse set of skills to every
            project. My technical expertise spans across various domains,
            ensuring that I can deliver comprehensive and effective solutions.
            Here’s a closer look at the skills that define my professional
            toolkit:
          </p>
          <hr></hr>
          <dt class="col-sm-3 text-yellow fw-bolder">Web Development</dt>
          <dd class="col-sm-9">
            <ul>
              <li>
                <span class="text-yellow fw-bolder">HTML5 & CSS3:</span>
                Proficient in creating well-structured and visually appealing
                web pages with modern HTML and CSS standards.
              </li>
              <li>
                <span class="text-yellow fw-bolder">React.js:</span> Expertise
                in building dynamic and responsive user interfaces using
                React.js, including state management with Redux and hooks.
              </li>
              <li>
                <span class="text-yellow fw-bolder">Angular</span> Knowledgeable
                in Angular for creating robust and scalable frontend
                applications with a focus on modularity and performance.
              </li>
              <li>
                <span class="text-yellow fw-bolder">Bootstrap</span> Skilled in
                utilizing Bootstrap to design responsive and aesthetically
                pleasing web layouts quickly.
              </li>
            </ul>
          </dd>

          <hr></hr>

          <dt class="col-sm-3 text-yellow fw-bolder">Backend Development</dt>
          <dd class="col-sm-9">
            <ul>
              <li>
                <span class="text-yellow fw-bolder">Node.js</span> Experienced
                in developing server-side applications and RESTful APIs using
                Node.js, with an emphasis on performance and scalability.
              </li>
              <li>
                <span class="text-yellow fw-bolder">Express.js</span> Proficient
                in using Express.js to streamline backend development and build
                efficient web servers and APIs.
              </li>
              <li>
                <span class="text-yellow fw-bolder">REST APIs</span> Adept at
                designing and implementing RESTful services that integrate
                seamlessly with frontend applications and other systems.
              </li>
            </ul>
          </dd>

          <hr></hr>

          <dt class="col-sm-3 text-yellow fw-bolder">Database Management</dt>
          <dd class="col-sm-9">
            <ul>
              <li>
                <span class="text-yellow fw-bolder">MongoDB:</span> Expertise in
                NoSQL databases with MongoDB, including schema design, data
                modeling, and optimization for performance.
              </li>
              <li>
                <span class="text-yellow fw-bolder">MySQL:</span> Solid
                experience with relational databases like MySQL, including query
                optimization, database design, and data management.
              </li>
            </ul>
          </dd>

          <hr></hr>

          <dt class="col-sm-3 text-yellow fw-bolder">
            Cloud Platforms & DevOps
          </dt>
          <dd class="col-sm-9">
            <ul>
              <li>
                <span class="text-yellow fw-bolder">
                  AWS (Amazon Web Services):
                </span>{" "}
                Skilled in deploying and managing applications on AWS, including
                services like EC2, S3, RDS, and Lambda.
              </li>
              <li>
                <span class="text-yellow fw-bolder">CI/CD:</span> Experienced in
                setting up Continuous Integration and Continuous Deployment
                pipelines to automate testing and deployment processes.
              </li>
              <li>
                <span class="text-yellow fw-bolder">Kubernetes & Docker:</span>
                Proficient in containerization with Docker and orchestration
                with Kubernetes, ensuring scalable and maintainable application
                deployments.
              </li>
            </ul>
          </dd>

          <hr></hr>

          <dt class="col-sm-3 text-yellow fw-bolder">Programming Languages</dt>
          <dd class="col-sm-9">
            <ul>
              <li>
                <span class="text-yellow fw-bolder">JavaScript:</span> Strong
                command of JavaScript for both client-side and server-side
                development, including ES6+ features and asynchronous
                programming.
              </li>
              <li>
                <span class="text-yellow fw-bolder">PHP:</span> Basic
                understanding of PHP, including its use in server-side scripting
                and integration with web applications.
              </li>
            </ul>
          </dd>

          <hr></hr>

          <dt class="col-sm-3 text-yellow fw-bolder">Version Control</dt>
          <dd class="col-sm-9">
            <ul>
              <li>
                <span class="text-yellow fw-bolder">Git:</span> Advanced
                knowledge of version control using Git, including branching,
                merging, and managing code repositories.
              </li>
              <li>
                <span class="text-yellow fw-bolder">GitHub & GitLab:</span>{" "}
                Familiar with collaboration and code review workflows on
                platforms like GitHub and GitLab, enhancing team productivity
                and code quality.
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
