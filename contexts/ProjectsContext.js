"use strict";
exports.__esModule = true;
exports.useProjects = exports.ProjectContextProvider = void 0;
var react_1 = require("react");
var helpers_1 = require("../helpers");
var ProjectsContext = (0, react_1.createContext)(null);
var ProjectContextProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([
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
            id: (0, helpers_1.uid)(),
            image: "/nftminter.jpg",
            title: "An NFT minting website",
            tags: [
                {
                    id: (0, helpers_1.uid)(),
                    text: "Reactjs"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Nextjs"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Web3"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Ethers"
                },
            ],
            github: "https://github.com/francisamidu/nft-minter",
            url: "http://nft-minter-web3.herokuapp.com",
            year: 2022
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
            id: (0, helpers_1.uid)(),
            image: "/note-app.jpg",
            title: "A decentralized note taking app",
            tags: [
                {
                    id: (0, helpers_1.uid)(),
                    text: "Reactjs"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Nextjs"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Solidity"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Truffle & Web3.js"
                },
            ],
            github: "https://github.com/francisamidu/note-app",
            url: "https://noter-react-app.netlify.app/",
            year: 2021
        },
        {
            id: (0, helpers_1.uid)(),
            image: "/goalsapp.jpg",
            title: "A React and Tailwind landing page design for a SAAS app/company",
            tags: [
                {
                    id: (0, helpers_1.uid)(),
                    text: "Reactjs"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "Nextjs"
                },
                {
                    id: (0, helpers_1.uid)(),
                    text: "TailwindCss"
                },
            ],
            github: "https://github.com/francisamidu/goalsapp",
            url: "http://goalsapp.vercel.app",
            year: 2021
        },
    ]), projects = _b[0], setProjects = _b[1];
    return (<ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>);
};
exports.ProjectContextProvider = ProjectContextProvider;
var useProjects = function () { return (0, react_1.useContext)(ProjectsContext); };
exports.useProjects = useProjects;
