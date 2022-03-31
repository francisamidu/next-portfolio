import React, { createContext, useState, useContext } from "react";

const { v4 } = require("uuid");
const ProjectsContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: v4(),
      image: "/monstercrypt.jpg",
      title: "A Fullstack NFT marketplace",
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
          text: "Web3",
        },
        {
          id: v4(),
          text: "Ethers",
        },
      ],
      github: "https://github.com/francisamidu/digital-asset-marketplace",
      url: "http://monstercrypt.netlify.app",
      year: 2022,
    },{
      id: v4(),
      image: "/nftminter.jpg",
      title: "An NFT minting website",
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
          text: "Web3",
        },
        {
          id: v4(),
          text: "Ethers",
        },
      ],
      github: "https://github.com/francisamidu/nft-minter",
      url: "http://nftminter.netlify.app",
      year: 2022,
    },
    // {
    //   id: v4(),
    //   image: "/reala.jpg",
    //   title: "A real estate app on the blockchain",
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
    //       text: "Tailwind",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/reala",
    //   url: "http://reala.netlify.app",
    //   year: 2022,
    // },
    // {
    //   id: v4(),
    //   image: "/sefuwallet.jpg",
    //   title: "A secure cryptocurrency wallet on the blockchain",
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
    //       text: "Solidity",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/sefuwallet",
    //   url: "http://sefuwallet.herokuapp.com",
    //   year: 2022,
    // },
    // {
    //   id: v4(),
    //   image: "/nft-marketplace.jpg",
    //   title:
    //     "NFTRave is an NFT marketplace for the modern internet. Discover and collect unique NFT's",
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
    //       text: "Solidity",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/nftrave",
    //   url: "http://nftrave.herokuapp.com",
    //   year: 2022,
    // },
    // {
    //   id: v4(),
    //   image: "/wuzza.jpg",
    //   title: "A productivity app management tool",
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
    //   github: "https://github.com/francisamidu/wuzza-client",
    //   url: "https://wuzza-client.herokuapp.com/",
    //   year: 2021,
    // },
    // {
    //   id: v4(),
    //   image: "/password-manager.jpg",
    //   title: "A simplistic password manager chrome extension",
    //   tags: [
    //     {
    //       id: v4(),
    //       text: "HTML5",
    //     },
    //     {
    //       id: v4(),
    //       text: "CSS3",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/password-manager-client",
    //   url: "https://chrome.google.com/webstore/category/extensions?hl=en-US/passman",
    //   year: 2021,
    // },
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
    //   url: "http://furnistore-client.herokuapp.com",
    //   year: 2021,
    // },
    {
      id: v4(),
      image: "/note-app.jpg",
      title: "A decentralized note taking app",
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
          text: "Solidity",
        },
        {
          id: v4(),
          text: "Truffle & Web3.js",
        },
      ],
      github: "https://github.com/francisamidu/note-app",
      url: "http://note-app.herokuapp.com",
      year: 2021,
    },
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
