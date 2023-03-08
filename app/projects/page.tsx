"use client";

import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";
import { IconFirebase, IconNextJS, IconTailwindCSS } from "./projecticons";

import shopbg from "@/public/projectbackgrounds/shopbg.jpg";
import portfoliobg from "@/public/projectbackgrounds/portfoliobg.jpg";
import penguinbg from "@/public/projectbackgrounds/penguinbg.jpg";

export default function Projects() {
  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <ProjectsWrapper>
        <ProjectCard
          title="Mehta Udyog"
          description="A stock and salary management system created using NextJS and Firebase. It’s my first real NextJS project so it’s not very good but I have learned a lot with this Project. This project’s main goal is to to calculate the salaries based on the items made and painted by workers and painters. This project also keeps tracks of the stock, the items made by workers, the items painted by painters and the sales done. It also generates pdfs based on this data. This project is specially made for a furniture store in my area and is used by the client and makes his work easier."
          tags={[<IconNextJS />, <IconFirebase />, <IconTailwindCSS />]}
          //   link="https://google.com"
          backgroundImage={shopbg}
          key={Math.random()}
        />
        <ProjectCard
          title="Portfolio"
          description=""
          tags={[<IconNextJS />, <IconFirebase />, <IconTailwindCSS />]}
          link="https://acosmicwolf.me"
          backgroundImage={portfoliobg}
          key={Math.random()}
        />
        <ProjectCard
          title="FlapChat"
          description=""
          backgroundImage={penguinbg}
          key={Math.random()}
        />
      </ProjectsWrapper>
    </div>
  );
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 1em;
  gap: 1em;
`;

const PageTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin: 0.5em;
  /* Make text stand out */
  text-shadow: 0 0 0 #fff, 0 0 0.25rem #fff;
`;

interface Project {
  title: string;
  description: string;
  tags?: ReactElement[];
  source?: string;
  link?: string;
  backgroundImage?: string | StaticImageData;
}

const ProjectCard = ({
  title,
  description,
  tags,
  source,
  link,
  backgroundImage,
}: Project) => {
  return (
    <Card>
      <CardContent>
        <Image
          src={backgroundImage as string}
          alt=""
          fill
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundSize: "cover",
            overflow: "hidden",
            objectFit: "cover",
            filter: "blur(5px)",
          }}
        />
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLink href={link} target="_blank">
          {link}
        </ProjectLink>
        <ProjectTags>
          {tags?.map((tag) => {
            return <p key={Math.random()}>{tag}</p>;
          })}
        </ProjectTags>
        <a href={source}>{source}</a>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  width: 400px;
  aspect-ratio: 10 / 16;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ProjectTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  /* Make text stand out */
  text-shadow: 0 0 0 #fff, 0 0 0.25rem #fff;
`;

const ProjectDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 1.5em;
  padding-right: 1.5em;
  height: 300px;
  overflow: auto;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: black;
  filter: drop-shadow(0 0 0.75rem #fff) drop-shadow(0 0 0.75rem #fff);
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  /* Make text stand out */
  text-shadow: 0 0 1rem #fff, 0 0 0.25rem #fff;
`;
