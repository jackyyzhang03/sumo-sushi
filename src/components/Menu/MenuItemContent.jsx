import * as React from "react";

const MenuItemContent = (props) => {
  return (
    <>
    <div className="row">
        {props.name && <p className="item-name">{props.name}</p>}
        {props.secondaryPrice && (
          <p className={"price fixed"}>{props.secondaryPrice}</p>
        )}
        <p className={props.secondaryPrice ? "price fixed" : "price"}>
          {props.price}
        </p>
      </div>
      {props.children && <p className="description">{props.children}</p>}
    </>
  );
};

export default MenuItemContent;