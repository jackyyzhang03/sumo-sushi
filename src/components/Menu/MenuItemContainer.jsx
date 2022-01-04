import styled from "styled-components";

const MenuItemContainer = styled.div`
  clear: right;
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
  padding: 2px 0 2px 0;

  font-family: "Nunito Sans";
  font-size: 16px;
  line-height: 1;

  .item-name, .price {
    font-weight: bold;
  }

  .price {
    float: right;
    text-align: right;
  }

  .fixed {
    width: 120px;
  }

  .description {
    margin-right: 60px;
    font-size: 14px;
  }
`

export default MenuItemContainer;