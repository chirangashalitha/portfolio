import "./About.css";
import { motion } from "framer-motion";
import InfoSchol from "../../assets/images/about.png";
import CuttingEdge24 from "../../assets/images/cuttingedge24.jpg";
import eBEYONDS from "../../assets/images/ebeyonds-team-cropped.jpg";
import InfoSchol2 from "../../assets/images/infoschol.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="container d-flex flex-column align-items-center gap-2">
        <h2 className="about-title title">About</h2>
        <p>
          👋 Hi there! This is my personal portfolio website. Thank you for
          visiting, have a look at my recent projects.
        </p>
        <p>
          I’m a passionate Web Developer who loves creating user-friendly
          designs that are visually stunning. Right now, I’m learning ReactJS,
          JavaScript, and UI/UX Design. I’m 21 and based in Colombo, Sri Lanka,
          excited about the future in tech and design!
        </p>

        <div className="gallery-container">
          <motion.img
            src={InfoSchol}
            alt="InfoSchol Induction Program 2024"
            className="gallery-image"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={eBEYONDS}
            alt="eBEYONDS Team"
            className="gallery-image"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={CuttingEdge24}
            alt="Cutting Edge Exhibition 2024 at BMICH"
            className="gallery-image"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={InfoSchol2}
            alt="InfoSchol Induction Day Finale"
            className="gallery-image"
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
