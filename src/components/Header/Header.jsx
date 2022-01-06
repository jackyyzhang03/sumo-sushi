import * as React from "react";
import Nav from "../Nav/Nav";
import NavButton from "../MobileNav/NavButton";
import HeaderContainer from "./HeaderContainer";
import MobileNav from "../MobileNav/MobileNav";
import Logo from "../Logo/Logo";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const toggleActive = () => setActive(!active);

  return (
    <HeaderContainer>
      <NavButton onClick={toggleActive} />
      <Logo />
      <MobileNav active={active} onClick={toggleActive} />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
