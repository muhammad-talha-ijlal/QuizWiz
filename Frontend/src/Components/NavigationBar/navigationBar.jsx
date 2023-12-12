import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationBarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigationBar-style.jsx";
export default function NavigationBar() {
  const userId = localStorage.getItem("userId");
  const handleClickSignOut = () => {
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <img src="" alt="Crown" className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {userId ? ( // if currentUser is not null
            <NavLink onClick={handleClickSignOut} as="span">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinksContainer>
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  );
}
