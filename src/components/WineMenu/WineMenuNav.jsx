import * as React from "react";
import WineMenuNavContainer from "./WineMenuNavContainer";

const WineMenuNav = (props) => {
  const tabNames = ["White Wine", "Red Wine", "Beer", "Sake"];

  return (
    <WineMenuNavContainer>
      {tabNames.map((name, index) => (
        <span
          className={props.activeTabIndex === index ? "active" : ""}
          onClick={() => props.onClick(index)}
        >
          {name}
        </span>
      ))}
    </WineMenuNavContainer>
  );
};

export default WineMenuNav;
