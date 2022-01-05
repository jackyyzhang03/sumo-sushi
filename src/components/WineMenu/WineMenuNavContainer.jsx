import styled from "styled-components";

const WineMenuNavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  span {
    margin: 0px 25px 25px 0px;
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
`;

export default WineMenuNavContainer;