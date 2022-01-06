import styled from "styled-components";

const MobileNavContainer = styled.nav`
  position: fixed;
  top: 78px;
  transition: all 0.7s ease;

  height: 100%;
  width: 100%;
  background-color: white;

  text-align: center;
  font-family: "Nunito Sans";
  text-transform: uppercase;

  a {
    color: black;
    font-size: 18px;
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

  &.hidden {
    transform: translateX(-100%);
    display: hidden;
  }

  .links {
    height: 50%;
    display: flex;
    flex-flow: column wrap;
  }
`;

export default MobileNavContainer;
