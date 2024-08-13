import "./Featured.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MedicaLinkUIFull from "../../assets/images/medicalink-tab-Photoroom.png";

const Featured = () => {
  const featuredSection = useRef(null);
  const isInView = useInView(featuredSection, { once: false });

  return (
    <motion.div
      ref={featuredSection}
      className="featured-section"
      initial={{ backgroundColor: "#000000" }} // Initial bgcolor
      animate={{ backgroundColor: isInView ? "#0077be" : "#000000" }} // Change bgcolor
      transition={{ duration: 0.2 }}
    >
      <div className="container d-flex flex-column align-items-center gap-2">
        <h2 className="featured-title title">Featured Project</h2>
        <h3>MedicaLink - Digital HealthCare App</h3>
        <p>
          The Next Generation of Electronic Health Records designed to
          Revolutionize Healthcare in Sri Lanka. With MedicaLink, Doctors and
          Healthcare providers are able to access a patient's medical history
          instantly. It allows them to diagnose diseases more effectively and
          make predictions based on past medical history.
        </p>
        <div className="d-flex flex-row mt-4 justify-content-center align-items-center">
          <img src={MedicaLinkUIFull} className="featured-project-image"/>
        </div>
        <p>Stay tuned for more exciting updates!</p>
      </div>
    </motion.div>
  );
};

export default Featured;
