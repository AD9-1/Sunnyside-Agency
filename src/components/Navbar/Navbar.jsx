import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [expandbar, setExpandBar] = useState("false");
  const location = useLocation();

  useEffect(() => {
    setExpandBar(false);
  }, [location]);

  const handleClick = () => {
    setExpandBar(!expandbar);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 375) {
        setExpandBar(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-open-icon">
        <MenuIcon onClick={handleClick} style={{ color:"white" }} />
      </div>
      <ul className={expandbar ? "navbar-list-mobile" : "navbar-list"}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li className="contact">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
