import styled from "styled-components";

const HeaderContainer = styled.div`
  min-height: 115px;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  z-index: 10;

  .hamburger {
    display: none;
    position: absolute;
    left: 25px;
    top: 25px;
    transition: all 0.3s;
  }

  .hamburger:hover {
    color: var(--venetian-red);
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    min-height: 78px;
    .hamburger {
      display: block;
    }
    .nav {
      display: none;
    }
  }
`;

export default HeaderContainer;
