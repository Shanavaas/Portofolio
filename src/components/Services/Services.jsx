import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./shanavaas resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
<<<<<<< HEAD
        <span style={{ color: darkMode ? "white" : "" }}>hands-on</span>
        <span>skills</span>
        <spane>
        I specialize in delivering comprehensive full-stack web applications,
          <br />
          encompassing both front-end design and back-end functionality. 
=======
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          I provide full stack development services,
          <br />
          From front-end design to back-end functionality
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
          <br />
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
<<<<<<< HEAD
            heading={"FRONTEND"}
            detail={"React.js, HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX"}
=======
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
<<<<<<< HEAD
            heading={"BACKEND"}
            detail={
              "Node.js (Express.js), Python, Django REST Framework, PHP, AJAX"
=======
            heading={"Developer"}
            detail={
              "MERN Stack, Html, Css, JavaScript, React, Nodejs, Express.js,Angular, MongoDB"
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
<<<<<<< HEAD
            heading={"Database (Primary: SQL)"}
            detail={
              "SQL (MySQL, PostgreSQL, SQLite), NoSQL (MongoDB, Mongoose)"
=======
            heading={"UI&UX"}
            detail={
              "React.js, Bootstrap, Flutte, Canva, Web Designing, LOGO making"
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
