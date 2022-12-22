"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var react_1 = require("react");
var components_1 = require("../components");
var bs_1 = require("react-icons/bs");
var cg_1 = require("react-icons/cg");
var App = function () {
    return (<>
      <head_1["default"]>
        <title>Full-Stack Developer - Francis Amidu</title>
        <meta name="author" content="Francis Amidu"/>
        <meta name="description" content="Francis Amidu, A fullstack web developer specialising in HTML5, CSS3, JavaScript, ReactJs and Node.js"/>
        <meta property="og:title" content="Francis Amidu - Fullstack Web Developer"/>
        <meta property="og:description" content="Francis Amidu, A fullstack web developer specialising in HTML5, CSS3, JavaScript, ReactJs and Node.js"/>
        <meta property="og:type" content="website"/>
        <meta property="og:author" content="Francis Amidu"/>
        <meta property="og:owner" content="Francis Amidu"/>
        <meta property="site_name" content="http://francisamidu.vercel.app"/>
        <meta property="og:site_name" content="http://francisamidu.vercel.app"/>
        <link rel="icon" href="/favicon.ico"/>
      </head_1["default"]>
      <main role="main" tabIndex="2" id="main" className="p-4">
        <div className="socials flex flex-col items-center justify-center">
          <a href="https://github.com/francisamidu">
            <bs_1.BsGithub className="text-white text-2xl mb-4"/>
          </a>
          <a href="https://www.linkedin.com/in/francis-amidu-fullstack-developer">
            <bs_1.BsLinkedin className="text-white text-2xl mb-4"/>
          </a>
          <a href="mailto:francisamidu124@gmail.com">
            <cg_1.CgMail className="text-white text-2xl"/>
          </a>
        </div>
        <components_1.Navbar />
        <components_1.Home />
        <components_1.Work />
        <components_1.Services />
        <components_1.About />
        <components_1.Contact />
      </main>
    </>);
};
exports["default"] = App;
