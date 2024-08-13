import NavBar from "./NavBar";
import ProfileImage from "../../assets/images/profile.jpg";
import "./Hero.css";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = () => {
  return (
    <>
      <div>
        <NavBar />

        <div className="hero-image col-12">
          <motion.div
            className="container"
            animate={{ x: -100, opacity: 1 }}
            initial={{ x: 0, opacity: 0 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <div className="container">
              <Row>
                <Col lg={6}>
                  <motion.img src={ProfileImage} className="profile-image" whileHover={{ scale: 1.1 }}/>
                </Col>
                <Col lg={6} className="profile-info d-flex flex-column gap-4">
                  <h1 className="profile-name">Chiranga Shalitha</h1>
                  <h2 className="profile-title">
                    Web Developer | UI/UX Designer
                  </h2>
                  <div className="profile-icons gap-2">
                    <motion.a whileHover={{ scale: 1.5 }}
                      href="https://github.com/chirangashalitha"
                      target="_blank"
                    >
                      <i className="bi bi-github text-white btn-github"></i>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.5 }}
                      href="https://www.linkedin.com/in/chiranga-shalitha"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin text-white btn-linkedin"></i>
                    </motion.a>
                  </div>
                </Col>
              </Row>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
