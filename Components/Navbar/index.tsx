"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarWrapper open={isOpen}>
      <Link href={"/"}> ACosmicWolf </Link>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IconHamburgerMenu />
      </button>
      <NavbarMenu open={isOpen}>
        <Link className="interactable" href="/">
          Home
        </Link>
        <Link className="interactable" href="/projects">
          Projects
        </Link>
      </NavbarMenu>
    </NavbarWrapper>
  );
}

interface NavbarProps {
  open: boolean;
}

const NavbarMenu = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  font-size: 1rem;
  color: #9d9d9d;
  transition: all 0.2s ease-in-out;

  & > a {
    cursor: pointer;
    text-decoration: none;
    color: #9d9d9d;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #fff;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    ${(props) => (props.open ? "display: flex;" : "display: none;")}
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background: #242424;
    width: 100%;
    transition: all 0.2s ease-in-out;

    & > a {
      padding: 1rem 0;
      font-size: 1.5rem;
    }
  }
`;

const NavbarWrapper = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #242424;

  & > a {
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    color: #9d9d9d;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      font-size: 1.6rem;
    }
  }

  & > button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    color: #9d9d9d;
    font-size: 1.5rem;

    /* Large Screen and Medium Screen */
    @media (min-width: 768px) {
      display: none;
    }
  }

  /* Large Screen */
  @media (min-width: 1024px) {
    margin: 0 15rem 0 15rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 8rem 0 8rem;
  }
`;

function IconHamburgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
