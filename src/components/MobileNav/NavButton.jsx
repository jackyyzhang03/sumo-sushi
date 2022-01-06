import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavButton = (props) => {
  return (
    <div className={props.active ? "hamburger active" : "hamburger"} onClick={props.onClick}>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
      />
    </div>
  );
};

export default NavButton;
