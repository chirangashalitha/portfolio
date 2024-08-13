import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg fixed-top gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="navlink" aria-current="page" href="#">
              Home
            </a>
            <a className="navlink" href="#about">
              About
            </a>
            <a className="navlink" href="#projects">
              Projects
            </a>
            <a className="navlink" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
