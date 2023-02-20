import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 80px; */
  padding: 30px 5%;
  width: 100%;
  background-color: ${({ theme }) => theme.navbarBackgroundColor};
`;

export const NavbarLogo = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.logoColor};
`;
export const NavbarToggle = styled(motion.div)`
  font-size: 30px;
  z-index: 999;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const MenuOverlay = styled(motion.div)`
  background: rgba(0, 0, 0, 0.459);

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 997;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavbarLinksContainer = styled(motion.div)`
  /* text-align: center; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  transform: translateX(0);
    opacity: 1;
  @media screen and (min-width: 900px) {
    
  }
  @media screen and (max-width: 900px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 15%;
    width: 50%;
    z-index: 998;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #ffffff;
  }
`;

export const NavbarLink = styled(NavLink)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.navbarLinkColor};
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.navbarLinkHoverColor};
  }
`;

export const ToggleButton = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.toggleButtonColor};
  background-color: ${({ theme }) => theme.toggleButtonBackgroundColor};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.toggleButtonHoverBackgroundColor};
  }
`;

export const SignUpButton = styled(motion.button)`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.toggle};
  }
`;
