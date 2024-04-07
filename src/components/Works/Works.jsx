import React, { useContext } from "react";
import "./Works.css";
<<<<<<< HEAD
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import Nodejs from "../../img/nodejs.png";
import Django from "../../img/django.png";
import Php from "../../img/php.png";
import Python from "../../img/python.png";
import postgres from "../../img/postgres.png";
=======
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
<<<<<<< HEAD
          My Skills
          </span>
          <span>Frontend & Backend Development</span>
          <spane>
          I specialize in crafting robust RESTful APIs and excelling in HTML, CSS, Bootstrap, 
            <br />
            jQuery, and PHP for frontend and backend development.
            <br />
            With experience in various technologies including Node.js, Express.js, Django, and PHP frameworks, 
            <br />
            I deliver efficient and scalable solutions tailored to meet diverse needs.
=======
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            I specialize in API development, database optimization,
            <br />
            security implementation, testing, and deployment text
            <br />
            Expect a high-quality, future-proof solution with end-to-end support
            <br />
            including ongoing maintenance and updates
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
<<<<<<< HEAD
            <img src={Nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Django} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Python} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Php} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={postgres} alt="" />
=======
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
