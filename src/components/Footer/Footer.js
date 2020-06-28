import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Footer component

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3 className="copyright">© 2020 InfoMovie by Bailey Niemiller</h3>
      </footer>
    );
  }
}

export default Footer;
