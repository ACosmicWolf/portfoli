"use client";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function MouseTrailer() {
  const onMouseMove = (e: MouseEvent) => {
    if (trailer.current) {
      trailer.current.animate(
        {
          transform: `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`,
        },
        {
          duration: 800,
          fill: "forwards",
        }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  const trailer = useRef<HTMLDivElement>(null);

  return <Trailer ref={trailer} />;
}

const Trailer = styled.div`
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;

  position: fixed;
  z-index: 9999999;

  top: 0;
  left: 0;

  pointer-events: none;
  opacity: 0;
  transition: opacity 500ms ease;

  body:hover,
  *:hover & {
    opacity: 1;
  }

  /* Small Screen */
  @media (max-width: 767px) {
    display: none;
  }
`;
