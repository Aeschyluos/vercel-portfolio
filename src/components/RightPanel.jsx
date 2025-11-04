import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import Footer from "./Footer";

//gothliat
import shopPage from "../assets/gothliat/shopPage.png";
import productPage from "../assets/gothliat/productPage.png";

// sunyi
import homePage from "../assets/sunyi/homePage.png";
import mapPage from "../assets/sunyi/mapPage.png";
import loginPage from "../assets/sunyi/loginPage.png";
import createPage1 from "../assets/sunyi/createPage1.png";
import createPage2 from "../assets/sunyi/createPage2.png";

const PROJECTS = [
  {
    id: "sunyi",
    title: "SUNYI",
    short: "Local music gig finder",
    description:
      "A local gig/event discovery website, where people can browse to find upcoming shows in Jakarta. It is complete with an interactive map, users can register/log in, and the ability to create gigs",
    tech: ["React", "Go", "Typescript", "Next.js", "PostgreSQL"],
    img: [homePage, mapPage, loginPage, createPage1, createPage2],
    year: 2025,
    live: "#",
    repo: "https://github.com/Aeschyluos/sunyi",
  },
  {
    id: "gothliat",
    title: "GOTHLIAT",
    short: "Digital store of reworked clothing",
    description:
      "An online store that modify thrift clothing into unique pieces. I built the product catalog and individual product pages with a complete checkout process, and I designed and implemented a backed inventory system.",
    tech: ["React", "Material UI", "Node.js", "MongoDB"],
    img: [shopPage, productPage],
    year: 2024,
    live: "#",
    repo: "https://github.com/Aeschyluos/catalog",
  },
];

const SKILLS = {
  Languages: [
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Go",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "Typescript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ],
  "Web Development": [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      invert: true,
    },
    {
      name: "Vite.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  Data: [
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Supabase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
    {
      name: "R",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
  ],
  Tools: [
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true,
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
};

export default function RightPanel() {
  const [projects] = useState(PROJECTS);

  return (
    <div className="bg-transparent">
      <div
        className="w-full px-8 py-6 lg:py-8"
        style={{
          marginTop: "3rem",
        }}
      >
        <div className="max-w-full">
          <section
            id="about"
            style={{
              marginBottom: "7rem",
              scrollMarginTop: "7rem",
            }}
          >
            <h2 className="text-lg font-semibold" style={{ marginBottom: "0" }}>
              About
            </h2>
            <hr
              style={{
                opacity: "0.4",
              }}
            ></hr>
            <p
              className="text-muted leading-relaxed"
              style={{ marginBottom: "2rem" }}
            >
              I'm a Computer Science student in my 5th semester at BINUS
              University. I started coding when I was 16, making small games and
              websites. From then on, I never stopped. What began as small
              passion projects has grown into building end-to-end web
              applications and backend services. Modeling and optimizing data
              with <span className="text-fg">MongoDB</span> and{" "}
              <span className="text-fg">MySQL</span>, packaging and deploying
              via Docker.
            </p>

            <p className="text-muted leading-relaxed">
              I’m comfortable with <span className="text-fg">Python</span>,{" "}
              <span className="text-fg">JavaScript</span>, and{" "}
              <span className="text-fg">C</span>. I enjoy exploring new tools
              whenever a problem demands them. I’m driven by building clean
              solutions to problems and eager to thrust that drive and
              experience into internships and collaborative projects.
            </p>
          </section>

          <section
            id="projects"
            style={{
              marginBottom: "7rem",
              scrollMarginTop: "7rem",
            }}
          >
            <h2
              className="text-lg font-semibold"
              style={{
                marginBottom: "0",
              }}
            >
              Projects
            </h2>
            <hr
              style={{
                opacity: "0.4",
              }}
            ></hr>
            <div
              className="mt-6 flex flex-wrap justify-start "
              style={{ marginTop: "1rem" }}
            >
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>

          <section
            id="skills"
            style={{
              marginBottom: "7rem",
              scrollMarginTop: "7rem",
            }}
          >
            <h2
              className="text-lg font-semibold"
              style={{
                marginBottom: "0",
              }}
            >
              Skills
            </h2>
            <hr
              style={{
                opacity: "0.4",
              }}
            />

            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} style={{ marginTop: "2rem" }}>
                <h3
                  className="text-sm font-semibold text-muted"
                  style={{ marginBottom: "1rem" }}
                >
                  {category}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
