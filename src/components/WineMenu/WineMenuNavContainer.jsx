import styled from "styled-components";

const WineMenuNavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  span {
    padding: 5px;
    font-family: "Nunito Sans";
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    transition: text-decoration-color 0.3s;
    text-decoration: underline white;
  }

  span:hover,
  .active {
    text-decoration-color: black;
  }

  @media only screen and (max-width: 425px) {
    span {
      font-size: 14px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default WineMenuNavContainer;