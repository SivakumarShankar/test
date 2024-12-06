import React from 'react';
import Footer from './footer';

export const Project = () => {
  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{ backgroundColor: "#003ecb", minHeight: "100vh" }}  // Ensure full viewport height
    >
      <div className="container py-5 flex-grow-1" style={{ maxWidth: "100%" }}>
        <h2 className="text-center mb-4 text-white">Project Experience</h2>

        {/* Latest Project */}
        <div className="mb-5">
          <h3 className="text-white">Latest Project: <span className="text-warning">Website Development</span></h3>
          <p className="text-white">
            In my most recent project, I developed a <strong>full-stack website</strong> with a <strong>React front-end</strong>, utilizing <strong>Bootstrap</strong> for responsive design.
            The back-end is hosted on <strong>AWS</strong>, leveraging services like <strong>S3</strong>, <strong>Route 53</strong>, <strong>Certificate Manager</strong>, and <strong>CloudFront</strong> for secure, scalable hosting and delivery.
            The project is available on <a href="https://github.com/SivakumarShankar/testFoptions" target="_blank" rel="noopener noreferrer" className="text-warning">GitHub</a> for open access and further improvements.
          </p>
        </div>

        {/* Bytize Technology */}
        <div className="mb-5">
          <h3 className="text-white">Bytize Technology (<span className="text-warning">Full Stack Developer</span>)</h3>
          <p className="text-white">
            I worked as a <strong>Full Stack Developer</strong> at <strong>Bytize Technology</strong> for one year. In this role, I gained hands-on experience with technologies like <strong>Pug.js</strong> and <strong>Node.js</strong>.
            I worked with a fantastic team and contributed to many projects, ensuring seamless functionality and implementing new learning opportunities to improve our products.
          </p>
        </div>

        {/* Aikyne Technologies */}
        <div className="mb-5">
          <h3 className="text-white">Aikyne Technologies (<span className="text-warning">Software Developer</span>)</h3>
          <p className="text-white">
            At <strong>Aikyne Technologies</strong>, I worked primarily with <strong>AWS</strong>. My focus was on cloud services like <strong>S3</strong>, <strong>CloudFront</strong>, <strong>EC2</strong>, <strong>ELB</strong>, and <strong>IAM</strong>.
            I also handled <strong>network setup</strong> and managed <strong>billing systems</strong> for cloud resources, ensuring cost optimization and efficient management of resources.
          </p>
        </div>

        {/* Relationship Manager */}
        <div>
          <h3 className="text-white">Relationship Manager</h3>
          <p className="text-white">
            In my previous role as a <strong>Relationship Manager</strong>, I successfully managed over <strong>100 clients</strong> and <strong>4 major projects</strong>.
            I was responsible for client communication, ensuring project goals were met, and delivering high-quality service to maintain strong business relationships.
          </p>
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default Project;
