import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./OtherTools.css";

const OtherTools = () => {
  const location = useLocation();
  const [activeTool, setActiveTool] = useState(location.pathname);

  const handleClick = (toolPath) => {
    setActiveTool(toolPath);
  };

  return (
    <div className="other-tools-container">
      <h3 className="other-tools-title">Other Free Tools</h3>
      <ul className="other-tools-list">
        <li className={activeTool === "/online-tools" ? "active" : ""}>
          <Link to="/online-tools" onClick={() => handleClick("/online-tools")}>
            Text Encryption
          </Link>
        </li>
        <li className={activeTool === "/encrypt-image-online" ? "active" : ""}>
          <Link to="/encrypt-image-online" onClick={() => handleClick("/encrypt-image-online")}>
            Encrypt Image Online
          </Link>
        </li>
        <li className={activeTool === "/FileEn" ? "active" : ""}>
          <Link to="/FileEn" onClick={() => handleClick("/FileEn")}>
            Online File Encrypt Decrypt
          </Link>
        </li>
        <li className={activeTool === "/bcrypt" ? "active" : ""}>
          <Link to="/bcrypt" onClick={() => handleClick("/bcrypt")}>
            Online Bcrypt Hashing
          </Link>
        </li>
        <li className={activeTool === "/triple-des" ? "active" : ""}>
          <Link to="/triple-des" onClick={() => handleClick("/triple-des")}>
            Online DES Encrypt Decrypt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OtherTools;
