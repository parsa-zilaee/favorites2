import React from "react";
import "./FooterStyles.css";

const Footer = ({ logo }) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <img src={logo} alt="Logo" style={{ height: "20px", marginRight: "2rem" }} />
            <div>
              <p>With the click of a button,</p>
              <p>reserve a lesson with a tutor.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>Founded in 2023. Tutoring Academy was a project made for by students. For students.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

