import "./About.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfoSchol from "../../assets/images/about.png";
import CuttingEdge24 from "../../assets/images/cuttingedge24.jpg";
import eBEYONDS from "../../assets/images/ebeyonds-team-cropped.jpg";
import InfoSchol2 from "../../assets/images/infoschol.png";

const About = () => {
  const aboutSection = useRef(null);
  const isInView = useInView(aboutSection, { once: true });

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const imageVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      ref={aboutSection}
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 4 }}
    >
      <div className="container d-flex flex-column align-items-center gap-2">
        <h2 className="about-title title">About</h2>
        <p>
          👋 Hi there! I’m a passionate Web Developer who loves creating
          user-friendly designs that are visually stunning. Right now, I’m
          learning ReactJS, JavaScript, and Python on my own. I’m 21 and based
          in Colombo, Sri Lanka, excited about the future in tech and design!
        </p>

        <motion.div
          className="gallery-container"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.img
            src={InfoSchol}
            alt="InfoSchol Induction Program 2024"
            className="gallery-image"
            variants={imageVariants}
          />
          <motion.img
            src={eBEYONDS}
            alt="eBEYONDS Team"
            className="gallery-image"
            variants={imageVariants}
          />
          <motion.img
            src={CuttingEdge24}
            alt="Cutting Edge Exhibition 2024 at BMICH"
            className="gallery-image"
            variants={imageVariants}
          />
          <motion.img
            src={InfoSchol2}
            alt="InfoSchol Induction Day Finale"
            className="gallery-image"
            variants={imageVariants}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
