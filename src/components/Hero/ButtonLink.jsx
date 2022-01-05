import { Link } from "gatsby";
import styled from "styled-components";

const ButtonLink = styled(Link)`
  display: block;
  height: 60px;
  width: 300px;
  outline: 1px solid white;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  margin: auto;
  background: none;
  font-size: 16px;
  vertical-align: middle;
  line-height: 60px;
  animation: fade 2s ease, slide-up 2s ease;

  &:hover {
    outline-width: 2px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default ButtonLink;
