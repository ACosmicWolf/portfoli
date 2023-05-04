"use client";

import styled from "styled-components";

import profile from "@/public/profile.png";
import Image from "next/image";
import {
  IconCss3,
  IconDiscord,
  IconFirebase,
  IconHtml5,
  IconJs,
  IconLinkedin,
  IconNextjs,
  IconPython,
  IconReact,
  IconTailwindcss,
} from "./Icons";

export default function Home() {
  return (
    <Wrapper>
      <HeroSection>
        <Image src={profile} alt="" />
        <h1>Hey there, I am Arsh! 👋</h1>
      </HeroSection>

      <AboutWrapper>
        <p>
          I'm a 15-year-old student from India, currently in 10th grade, and I'm a self-taught programmer.
        </p>
        <br />
        <p>
          I started programming when I was 13 years old with Python, but then I became very interested in web development and started learning HTML, CSS, and JS. After mastering the basics of JS, I learned about frameworks and discovered React and Next.js.
        </p>
        <p>
          I've been using NextJS, Firebase, and Tailwind CSS for my projects, and I'm continuously learning more about them.
        </p>
        <p>
          In addition to web development, I enjoy automating tasks and making my life easier. I'm also keen on learning more about how computers work under the hood.
        </p>
        <br />
        <p>I'm active on Discord, and you can contact me there.</p>
        <br />
        <p>
          Apart from programming, I like playing video games and watching anime in my free time.
        </p>
      </AboutWrapper>

      <Seperator />

      <div>
        <Heading>Social</Heading>
        <SocialIcons>
          <a
            target="_blank"
            href="https://discord.com/users/864575191915823116"
          >
            <IconDiscord />
            <p>ACosmicWolf#4023</p>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/arshmehta009/">
            <IconLinkedin />
            <p>arshmehta009</p>
          </a>
        </SocialIcons>
      </div>

      <Seperator />

      <div>
        <Heading>What I Use.</Heading>
        <IconsWrapper>
          <a href="https://nextjs.org/" target="_blank">
            <IconNextjs />
          </a>
          <a href="https://firebase.google.com/" target="_blank">
            <IconFirebase />
          </a>
          <a href="https://www.python.org/" target="_blank">
            <IconPython />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <IconReact />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <IconTailwindcss />
          </a>
          <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
            <IconJs />
          </a>
          <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
            <IconHtml5 />
          </a>
          <a href="https://en.wikipedia.org/wiki/CSS/" target="_blank">
            <IconCss3 />
          </a>
        </IconsWrapper>
      </div>

      <Seperator />

      <Footer>
        <p>© {new Date().getFullYear()} Arsh.</p>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  color: white;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;

  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin: 2em 0 2em 0;
  }

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #9d9d9d;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  color: white;
`;

const Heading = styled.div`
  text-align: center;
  margin: 2em 0 2em 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: #242424;
  margin: 2em 0 2em 0;

  /* Large Screen */
  @media (min-width: 1024px) {
    width: 60%;
  }

  /* Medium Screen */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  /* Small Screen */
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  color: white;
  padding: 2rem 2rem 0 2rem;
  font-size: 1.2rem;

  /* Large Scrren */
  @media (min-width: 1024px) {
    width: 60%;
  }

  & > h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #9d9d9d;
    margin-bottom: 3rem;
    text-align: center;
  }

  & > p {
    font-size: 1.2rem;
    margin-top: 0.2em;
  }

  & > br {
    margin: 0.5rem 0 0.5rem 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
  color: white;
  margin: 2em 0 2em 0;

  & > a {
    margin: 0 1em 0 1em;
    color: white;
    font-size: 2rem;
    text-decoration: none;

    text-align: center;

    &:hover {
      color: #9d9d9d;
    }

    & > p {
      font-size: 0.8rem;
      text-align: center;
      margin: 0 0 0 0.5em;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
  margin: 2em 0 2em 0;

  & > a {
    font-size: 2rem;
    margin: 0 1em 0 1em;
    color: white;

    &:hover {
      color: #9d9d9d;
    }
  }
`;
