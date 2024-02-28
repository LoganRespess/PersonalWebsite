import { NavbarContainer, Logo, NavLink, NavLinkContainer } from './NavbarElements'

const Navbar = ({ }) => {
  return (
    <>
      <NavbarContainer>
        <Logo href="/"> Logan </Logo>
        <NavLinkContainer>
          <NavLink><a href="/About">About</a></NavLink>
          <NavLink><a href="/Projects">Projects</a></NavLink>
          <NavLink><a href="/Blog">Blog</a></NavLink>
          <NavLink><a href="/Resume">Resume</a></NavLink>
        </NavLinkContainer>
      </NavbarContainer>
    </>
  );
};
export default Navbar;

