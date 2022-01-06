import { Link } from "gatsby";
import * as React from "react";

import NavContainer from "./NavContainer";
import Logo from "../Logo/Logo";

const Nav = (props) => {
  return (
    <NavContainer className="nav">
      <div className="group">
        <Link to="/menu" activeClassName="active" className="page-link">
          Menu
        </Link>
        <Link to="/wine" activeClassName="active" className="page-link">
          Wine and Beer
        </Link>
      </div>
      <div className="group">
        <a href="https://www.instagram.com/" className="page-link">
          Instagram
        </a>
        <Link to="/contact" activeClassName="active" className="page-link">
          Contact
        </Link>
      </div>
    </NavContainer>
  );
};

export default Nav;
