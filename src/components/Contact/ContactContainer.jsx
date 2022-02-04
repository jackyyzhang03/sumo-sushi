import styled from "styled-components";

const ContactContainer = styled.div`
  background-color: white;
  padding-top: 40px;
  padding-bottom: 40px;

  .content {
    display: flex;
    max-width: 1200px;
    width: 80%;
    margin: 0 auto 0 auto;
  }

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
    .content {
      flex-direction: column;
      height: 750px;
    }
    .map {
      margin: 10px 0 30px 0;
      height: 100px;
    }
    .contact-info {
      max-width: unset;
    }
  }
`;

export default ContactContainer;
