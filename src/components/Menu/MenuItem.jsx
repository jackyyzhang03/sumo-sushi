import * as React from "react";
import MenuItemContainer from "./MenuItemContainer";
import MenuItemContent from "./MenuItemContent";
import styled from "styled-components";

const MenuHeaderContainer = styled(MenuItemContainer)`
  .price {
    font-size: 14px;
  }
`;

const MenuItem = (props) => {
  if (props.header)
    return (
      <MenuHeaderContainer>
        <MenuItemContent {...props} />
      </MenuHeaderContainer>
    );
  return (
    <MenuItemContainer>
      <MenuItemContent {...props} />
    </MenuItemContainer>
  );
};

export default MenuItem;
