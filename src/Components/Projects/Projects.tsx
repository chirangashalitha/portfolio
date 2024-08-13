import "./Projects.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TecRootUI from "../../assets/images/figmaui.png";
import MedicaLinkUI from "../../assets/images/medicalink.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    hidden: { opacity: 0 },
  };

  const cardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
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
        <div className="row">
          <motion.div variants={cardVariants} className="col-md-6">
            <div className="card no-border">
              <img
                src={TecRootUI}
                className="card-img-top"
                alt="InfoSchol Induction Program 2024"
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
            </div>
          </motion.div>
          <motion.div variants={cardVariants} className="col-md-6">
            <div className="card no-border">
              <img
                src={MedicaLinkUI}
                className="card-img-top"
                alt="eBEYONDS Team"
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
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
