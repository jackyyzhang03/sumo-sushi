import { Link } from "gatsby";
import * as React from "react";

import NavContainer from "./NavContainer";
import Logo from "../Logo/Logo";

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/menu" activeClassName="active" className="page-link">
        Menu
      </Link>
      <Link to="/wine" activeClassName="active" className="page-link">
        Wine and Beer
      </Link>

      <Logo />

      <a href="https://www.instagram.com/" className="page-link">Instagram</a>
      <Link to="/contact" activeClassName="active" className="page-link">
        Contact
      </Link>
    </NavContainer>
  );
};

export default Nav;
