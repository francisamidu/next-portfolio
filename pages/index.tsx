import Head from "next/head";
import React from "react";

import { About, Contact, Home, Navbar, Services, Work } from "../components";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const App = () => {
  return (
    <>
      <Head>
        <title>Full-Stack Developer - Francis Amidu</title>
        <meta name="author" content="Francis Amidu" />
        <meta
          name="description"
          content="Francis Amidu, A fullstack web developer specialising in HTML5, CSS3, JavaScript, ReactJs and Node.js"
        />
        <meta
          property="og:title"
          content="Francis Amidu - Fullstack Web Developer"
        />
        <meta
          property="og:description"
          content="Francis Amidu, A fullstack web developer specialising in HTML5, CSS3, JavaScript, ReactJs and Node.js"
        />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="Francis Amidu" />
        <meta property="og:owner" content="Francis Amidu" />
        <meta property="site_name" content="http://francisamidu.vercel.app" />
        <meta
          property="og:site_name"
          content="http://francisamidu.vercel.app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main" tabIndex="2" id="main" className="p-4">
        <div className="socials flex flex-col items-center justify-center">
          <a href="https://github.com/francisamidu">
            <BsGithub className="text-white text-2xl mb-4" />
          </a>
          <a href="https://www.linkedin.com/in/francis-amidu-fullstack-developer">
            <BsLinkedin className="text-white text-2xl mb-4" />
          </a>
          <a href="mailto:francisamidu124@gmail.com">
            <CgMail className="text-white text-2xl" />
          </a>
        </div>
        <Navbar />
        <Home />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default App;
