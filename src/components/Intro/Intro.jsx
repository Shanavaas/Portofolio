import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Email from "../../img/email.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
<<<<<<< HEAD
          <span style={{ color: darkMode ? "white" : "" }}>Hii! I Am</span>
          <span>SHANAVAAS J</span>
          <span>
            Hi there! I'm a Fullstack Developer proficient in HTML, CSS, Bootstrap, jQuery, and PHP. I specialize in both frontend and backend development. On the frontend, I excel in HTML, CSS, Bootstrap, and utilize AJAX with jQuery for asynchronous communication with the backend.
            <br />
            On the backend, I'm skilled in PHP for server-side scripting, Node.js for building scalable applications, and Django REST framework for creating robust APIs.
            <br />
            With experience in RDBMS databases such as MySQL, SQLite, and PostgreSQL, I craft dynamic web solutions tailored to meet diverse needs. Additionally, I'm adept at handling JSON data and form-urlencoded requests through middleware implementations in Node.js, Django REST framework, and PHP.
          </span>

=======
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>SHANAVAAS J</span>
          <span>
            "Hi there! I'm a Fullstack Developer and I'm thrilled to be part of
            ever-evolving world of web developent and producting the Quality
            work.
            <br />
            Each Project has been a stepping stone
            <br />
            Pushing me to explore new techologies and concepts
          </span>
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Shanavaas">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shanavaas-j-0449901ab/">
            <img src={LinkedIn} alt="" />
          </a>
<<<<<<< HEAD
          <a href="mailto: shanavaas4786@gmail.com">
=======
          <a href="mailto: shanavaas2001@gmail.com">
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
            <img src={Email} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Fullstack" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
