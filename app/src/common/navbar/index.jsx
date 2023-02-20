import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarLinksContainer,
  NavbarLink,
  SignUpButton,
  NavbarToggle,
  MenuOverlay,
} from "./styles";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const routes = [
  { path: "/", name: "Home" },
  { path: "/profile", name: "Profile" },
  { path: "/goals", name: "Goals" },
];

const Navbar = ({ theme, toggleTheme, user }) => {
  const [toggle, setToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavbarContainer>
      <NavbarLogo>My Logo</NavbarLogo>
      <NavbarToggle onClick={() => setToggle(!toggle)}>
        {toggle ? <IoCloseOutline /> : <HiBars3BottomRight />}
      </NavbarToggle>
      <MenuOverlay
        initial={{ opacity: 1, x: 0 }}
        animate={toggle ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <NavbarLinksContainer
        initial={{ opacity: 1, x: 0 }}
        animate={
          toggle
            ? { opacity: 1, x: 0 }
            : isSmallScreen
            ? { opacity: 0, x: "110%" }
            : { opacity: 1, x: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {routes.map((route) => (
          <NavbarLink key={route.path} to={route.path}>
            {route.name}
          </NavbarLink>
        ))}

        <SignUpButton
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            dispatch(LogOut());
            dispatch(reset());
            navigate("/auth/signin");
          }}
        >
          Sign out
        </SignUpButton>
      </NavbarLinksContainer>
      {/* <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ToggleButton> */}
    </NavbarContainer>
  );
};

export default Navbar;
