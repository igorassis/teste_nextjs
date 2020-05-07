import styled from "styled-components";
import Link from 'next/link';

const StyledNav = styled.nav`
    height: 32px;
    background-color: #f2f2f2;
`;

const StyledLink = styled.a`
    text-decoration: none;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Link href="/login">
        Login
      </Link>
      <Link href="/about">
        About
      </Link>      
    </StyledNav>
  );
}
