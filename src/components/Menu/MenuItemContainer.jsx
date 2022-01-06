import styled from "styled-components";

const MenuItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: 2px 0 2px 0;

  font-family: "Nunito Sans";
  font-size: 16px;

  .row {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .item-name {
    flex: 1;
  }

  .item-name,
  .price {
    font-weight: bold;
  }

  .price {
    flex: none;
    text-align: right;
    margin-left: 20px;
  }

  .fixed {
    width: 70px;
  }

  .description {
    font-size: 14px;
  }
`;

export default MenuItemContainer;
