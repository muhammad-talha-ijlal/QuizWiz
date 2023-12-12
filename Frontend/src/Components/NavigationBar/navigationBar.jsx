import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationBarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigationBar-style.jsx";
export default function NavigationBar() {
  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <img src="/Assests/crown.svg" alt="Crown" className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink as="span">SIGN OUT</NavLink>

          <NavLink to="/auth">SIGN IN</NavLink>
        </NavLinksContainer>
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  );
}
