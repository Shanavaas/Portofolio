import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
<<<<<<< HEAD
          1.5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Experience</span>
=======
          1+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Intern & Experience</span>
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
<<<<<<< HEAD
          15+
=======
          20+
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
<<<<<<< HEAD
          2+
=======
          4+
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
