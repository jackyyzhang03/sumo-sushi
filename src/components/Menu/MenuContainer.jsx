import styled from "styled-components";

const MenuContainer = styled.div`
  padding: 60px 0 60px 0;
  width: 80%;
  max-width: 750px;
  margin: auto;

  h1 {
    font-family: Didot;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    margin: 0.5em;
  }

  .group {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 70px;
    margin: 40px auto 40px auto;
  }

  hr {
    margin: 60px 0 60px 0;
    width: 100%;
    height: 3px;
    background-color: var(--venetian-red);
    border: none;
  }

  @media only screen and (max-width: 768px) {
    max-width: 500px;
    .group {
      display: flex;
      flex-flow: column wrap;
    }
  }
`;

export default MenuContainer;
