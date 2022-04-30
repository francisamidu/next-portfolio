import React, { createContext, useState, useContext } from "react";
import { Project } from "../types";
import { uid } from "../helpers";

const ProjectsContext = createContext<Project[]>(null);

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([
    // {
    //   id: uid(),
    //   image: "/monstercrypt.jpg",
    //   title: "A Fullstack NFT marketplace",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Web3",
    //     },
    //     {
    //       id: uid(),
    //       text: "Ethers",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/digital-asset-marketplace",
    //   url: "http://digital-asset-marketplace.herokuapp.com",
    //   year: 2022,
    // },
    {
      id: uid(),
      image: "/nftminter.jpg",
      title: "An NFT minting website",
      tags: [
        {
          id: uid(),
          text: "Reactjs",
        },
        {
          id: uid(),
          text: "Nextjs",
        },
        {
          id: uid(),
          text: "Web3",
        },
        {
          id: uid(),
          text: "Ethers",
        },
      ],
      github: "https://github.com/francisamidu/nft-minter",
      url: "http://nft-minter-web3.herokuapp.com",
      year: 2022,
    },
    // {
    //   id: uid(),
    //   image: "/reala.jpg",
    //   title: "A real estate app on the blockchain",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Tailwind",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/reala",
    //   url: "http://reala.netlify.app",
    //   year: 2022,
    // },
    // {
    //   id: uid(),
    //   image: "/sefuwallet.jpg",
    //   title: "A secure cryptocurrency wallet on the blockchain",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Solidity",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/sefuwallet",
    //   url: "http://sefuwallet.herokuapp.com",
    //   year: 2022,
    // },
    // {
    //   id: uid(),
    //   image: "/nft-marketplace.jpg",
    //   title:
    //     "NFTRave is an NFT marketplace for the modern internet. Discover and collect unique NFT's",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Solidity",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/nftrave",
    //   url: "http://nftrave.herokuapp.com",
    //   year: 2022,
    // },
    // {
    //   id: uid(),
    //   image: "/wuzza.jpg",
    //   title: "A productivity app management tool",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "NodeJs",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/wuzza-client",
    //   url: "https://wuzza-client.herokuapp.com/",
    //   year: 2021,
    // },
    // {
    //   id: uid(),
    //   image: "/password-manager.jpg",
    //   title: "A simplistic password manager chrome extension",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "HTML5",
    //     },
    //     {
    //       id: uid(),
    //       text: "CSS3",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/password-manager-client",
    //   url: "https://chrome.google.com/webstore/category/extensions?hl=en-US/passman",
    //   year: 2021,
    // },
    // {
    //   id: uid(),
    //   image: "/furnistore-1.jpg",
    //   title: "A niche furniture E-Commerce Fullstack System",
    //   tags: [
    //     {
    //       id: uid(),
    //       text: "Reactjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "Nextjs",
    //     },
    //     {
    //       id: uid(),
    //       text: "NodeJs",
    //     },
    //   ],
    //   github: "https://github.com/francisamidu/furnistore",
    //   url: "http://furnistore-client.herokuapp.com",
    //   year: 2021,
    // },
    {
      id: uid(),
      image: "/note-app.jpg",
      title: "A decentralized note taking app",
      tags: [
        {
          id: uid(),
          text: "Reactjs",
        },
        {
          id: uid(),
          text: "Nextjs",
        },
        {
          id: uid(),
          text: "Solidity",
        },
        {
          id: uid(),
          text: "Truffle & Web3.js",
        },
      ],
      github: "https://github.com/francisamidu/note-app",
      url: "https://noter-react-app.netlify.app/",
      year: 2021,
    },
    {
      id: uid(),
      image: "/goalsapp.jpg",
      title: "A React and Tailwind landing page design for a SAAS app/company",
      tags: [
        {
          id: uid(),
          text: "Reactjs",
        },
        {
          id: uid(),
          text: "Nextjs",
        },
        {
          id: uid(),
          text: "TailwindCss",
        },
      ],
      github: "https://github.com/francisamidu/goalsapp",
      url: "http://goalsapp.vercel.app",
      year: 2021,
    },
  ]);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectContextProvider };

export const useProjects = () => useContext(ProjectsContext);
