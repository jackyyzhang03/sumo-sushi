import NavLink from "./NavLink";
import * as React from "react";

import MobileNavContainer from "./MobileNavContainer";

const MobileNav = (props) => {
  return (
    <MobileNavContainer className={!props.active && "hidden"}>
      <div className="links">
        <NavLink to="/menu" onClick={props.onClick}>
          Menu
        </NavLink>
        <NavLink to="/wine" onClick={props.onClick}>
          Wine and Beer
        </NavLink>
        <a href="https://www.instagram.com/" className="page-link" onClick={props.onClick}>
          Instagram
        </a>
        <NavLink to="/contact" onClick={props.onClick}>
          Contact
        </NavLink>
      </div>
    </MobileNavContainer>
  );
};

export default MobileNav;
