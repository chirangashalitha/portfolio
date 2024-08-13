import "./Projects.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TecRootUI from "../../assets/images/figmaui2.png";
import MedicaLinkUI from "../../assets/images/medicalink.png";
import { Row, Col } from "react-bootstrap";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const cardVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.div
      ref={ref}
      className="projects-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="projects-title title text-center mb-4">Projects</h2>

      <div className="container">
        <p>
          Recent projects: MedicaLink and Figma UI Designs. MedicaLink is an
          innovative Electronic Health Record System designed to streamline
          healthcare management, while Figma UI Designs highlight my passion for
          creating user-friendly and visually appealing interfaces. These are
          just a glimpse of what I’ve been working on—stay tuned for more
          projects, as I’ll be updating this section with new work soon!
        </p>
        <Row className="projects-row">
          <Col>
            <motion.div variants={cardVariants} className="card no-border">
              <img
                src={TecRootUI}
                className="card-img-top"
                alt="Figma UI Designs"
              />
              <div className="card-body">
                <h5 className="card-title">Figma UI Designs</h5>
                <p className="card-text">Click here to view more!</p>
                <button className="btn btn-primary">
                  <a
                    href="https://www.figma.com/design/b5JD62N1BzdfP3nzXieHBn/NEW-UI-Design-MedicaLink-EHR?node-id=0-1&t=YK5Q47Z7orvOhGhs-1"
                    target="_blank"
                  >
                    View More
                  </a>
                </button>
              </div>
            </motion.div>
          </Col>
          <Col>
            <motion.div variants={cardVariants} className="card no-border">
              <img
                src={MedicaLinkUI}
                className="card-img-top"
                alt="MedicaLink"
              />
              <div className="card-body">
                <h5 className="card-title">
                  MedicaLink - Electronic Health Record System
                </h5>
                <p className="card-text">Visit our website for more info!</p>
                <button className="btn btn-primary">
                  <a href="https://medicalink.co/" target="_blank">
                    Visit Website
                  </a>
                </button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Projects;
