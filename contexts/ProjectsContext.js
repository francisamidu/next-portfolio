import React, { createContext, useState, useContext } from "react";

const { v4 } = require("uuid");
const ProjectsContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    // {
    //   id: v4(),
    //   image: "/furnistore-1.jpg",
    //   title: "A niche furniture E-Commerce Fullstack System",
    //   tags: [
    //     {
    //       id: v4(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: v4(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: v4(),
    //       text: "NodeJs",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/furnistore",
    //   url: "http://furnistore.herokuapp.com",
    //   year: 2021,
    // },
    {
      id: v4(),
      image: "/goalsapp.jpg",
      title: "A React and Tailwind landing page design for a SAAS app/company",
      tags: [
        {
          id: v4(),
          text: "Reactjs",
        },
        {
          id: v4(),
          text: "Nextjs",
        },
        {
          id: v4(),
          text: "TailwindCss",
        },
      ],
      github: "https://github.com/francisamidu/goalsapp",
      url: "http://goalsapp.vercel.app",
      year: 2021,
    },
    {
      id: v4(),
      image: "/portfolio.jpg",
      title: "Portfolio redesign with Nextjs and TailwindCss",
      tags: [
        {
          id: v4(),
          text: "Nextjs",
        },
        {
          id: v4(),
          text: "Context API",
        },
        {
          id: v4(),
          text: "Sass",
        },
      ],
      github: "https://github.com/francisamidu/next-portfolio",
      url: "http://francisamidu.vercel.app",
      year: 2021,
    },
    {
      id: v4(),
      image: "/gitfiles.jpg",
      title: "Github profile and repo search App",
      tags: [
        {
          id: v4(),
          text: "Context API",
        },
        {
          id: v4(),
          text: "NextJs",
        },
        {
          id: v4(),
          text: "Css Modules",
        },
      ],
      github: "http://github.com/franciamidu/gitfiles",
      url: "http://gitfiles-app.herokuapp.com/",
      year: 2021,
    },
  ]);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectContextProvider };

export const useProjects = () => useContext(ProjectsContext);
