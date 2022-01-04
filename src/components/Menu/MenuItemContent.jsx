import * as React from "react";

const MenuItemContent = (props) => {
  return (
    <>
      <p>
        {props.name && <span className="item-name">{props.name}</span>}
        {props.secondaryPrice && (
          <span className={"price fixed"}>{props.secondaryPrice}</span>
        )}
        <span className={props.secondaryPrice ? "price fixed" : "price"}>
          {props.price}
        </span>
      </p>
      {props.children && <p className="description">{props.children}</p>}
    </>
  );
};

export default MenuItemContent;