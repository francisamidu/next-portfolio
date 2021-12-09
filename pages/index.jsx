import Head from "next/head";
import React from "react";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import About from "../components/About";
import Contact from "../components/Contact";

const App = () => {
  return (
    <>
      <Head>
        <title>React Developer - Francis Amidu</title>
        <meta name="author" content="Francis Amidu" />
        <meta
          name="description"
          content="Francis Amidu, A frontend web developer specialising in Responsive Websites using HTML5, CSS3, TailwindCSS and ReactJs"
        />
        <meta
          property="og:title"
          content="Francis Amidu - Front-End Developer"
        />
        <meta
          property="og:description"
          content="Francis Amidu, A frontend web developer specialising in HTML5, CSS3, JavaScript and ReactJs"
        />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="Francis Amidu" />
        <meta property="og:owner" content="Francis Amidu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main" tabIndex="2" id="main" className="p-4">
        <div className="socials flex flex-col items-center justify-center">
          <a href="https://github.com/francisamidu">
            <BsGithub className="text-white text-2xl mb-4" />
          </a>
          <a href="https://www.linkedin.com/in/francis-amidu-react-developer">
            <BsLinkedin className="text-white text-2xl mb-4" />
          </a>
          <a href="mailto:francisamidu124@gmail.com">
            <CgMail className="text-white text-2xl" />
          </a>
        </div>
        <Navbar />
        <Home />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default App;
