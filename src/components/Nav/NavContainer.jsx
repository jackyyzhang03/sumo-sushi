import styled from "styled-components";

const NavContainer = styled.div`
  height: 115px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 300px 1fr 1fr;
  text-align: center;
  align-items: center;
  font-family: "Nunito Sans";
  text-transform: uppercase;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  a {
    color: black;
    text-decoration: none;
    width: fit-content;
    margin: auto;
  }

  .page-link:hover::after, .active::after {
    display: block;
    margin: auto;
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--venetian-red);
  }
`;

export default NavContainer;
