import * as React from "react";
import { Link } from "gatsby";

const NavLink = (props) => {
  return (
    <Link to={props.to} activeClassName="active" className="page-link" onClick={props.onClick}>
      {props.children}
    </Link>
  );
};

export default NavLink;
