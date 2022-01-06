import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 80%;
  margin: 50px auto 50px auto;

  .contact-info,
  .map {
    flex: 1;
  }
  .contact-info {
    max-width: 300px;
  }

  .marker {
    transform: translateX(-50%) translateY(-100%);
    color: var(--venetian-red);
    position: relative;
  }

  h1 {
    font-family: Didot;
    font-size: 36px;
    font-weight: 400;
  }

  h2 {
    font-family: "Nunito Sans";
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-family: "Nunito Sans";
    font-size: 16px;
  }

  .map {
    margin-left: 10%;
  }

  hr {
    background-color: var(--venetian-red);
    border: none;
    height: 3px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 750px;
    .map {
      margin-left: 0;
      margin-top: 30px;
      height: 100px;
    }
    .contact-info {
      max-width: unset;
    }
  }
`;

export default ContactContainer;
