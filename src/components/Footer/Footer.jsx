import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
<<<<<<< HEAD
        <span>shanavaas4786@gmail.com</span>
=======
        <span>shanavaas2001@gmail.com</span>
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
        <div className="f-icons">
          <Linkedin color="white" size={"3rem"} />
          <Insta color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
