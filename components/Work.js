"use strict";
exports.__esModule = true;
var react_1 = require("react");
var _1 = require(".");
var ProjectsContext_1 = require("../contexts/ProjectsContext");
var Work = function () {
    var projects = (0, ProjectsContext_1.useProjects)();
    return (<div className="md:max-w-screen-lg md:px-0 px-10 m-auto py-4" id="work">
      <h1 className="text-3xl work-heading font-bold text-gray-100 mb-10">
        My Latest Works
      </h1>
      <div className="flex flex-col items-center mt-4">
        {projects === null || projects === void 0 ? void 0 : projects.map(function (project) { return (<_1.WorkItem item={project} key={project.id}/>); })}
        <_1.Button link="https://www.github.com/francisamidu" text="Browse All"/>
      </div>
    </div>);
};
exports["default"] = Work;
