import styled from "styled-components";

const NavContainer = styled.nav`
  position: absolute;
  height: 115px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 300px;
  text-align: center;
  align-content: center;
  font-family: "Nunito Sans";
  text-transform: uppercase;
  width: 100%;

  .group {
    display: flex;
  }

  a {
    color: black;
    text-decoration: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0);
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
