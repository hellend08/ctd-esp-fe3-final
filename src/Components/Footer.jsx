import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-image" />
      <div className="r-sociales">
        <Link to="https://www.facebook.com/helen.vasquezs">
          <img src="/images/ico-facebook.png" alt="fb-icon" />
        </Link>
        <Link to="https://www.instagram.com/hellend8/">
          <img src="/images/ico-instagram.png" alt="ig-icon" />
        </Link>
        <Link to="https://web.whatsapp.com/">
          <img src="/images/ico-whatsapp.png" alt="wsp-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
