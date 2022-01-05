import styled from "styled-components";

const NavContainer = styled.nav`
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
    border-bottom: 3px solid white;
    width: fit-content;
    margin: auto;
    transition: border-bottom 0.3s;
  }

  .page-link:hover,
  .active {
    border-bottom: 3px solid var(--venetian-red);
  }
`;

export default NavContainer;
