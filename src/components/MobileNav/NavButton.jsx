import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavButton = (props) => {
  return (
      <FontAwesomeIcon
        icon={faBars}
        onClick={props.onClick}
        size="2x"
        className="hamburger"
      />
  );
};

export default NavButton;
