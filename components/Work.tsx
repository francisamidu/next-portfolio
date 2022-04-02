import React from "react";

import { Button, WorkItem } from ".";

import { useProjects } from "../contexts/ProjectsContext";

const Work = () => {
  const projects = useProjects();
  return (
    <div className="md:max-w-screen-lg md:px-0 px-10 m-auto py-4" id="work">
      <h1 className="text-3xl work-heading font-bold text-gray-100 mb-10">
        My Latest Works
      </h1>
      <div className="flex flex-col items-center mt-4">
        {projects?.map((project) => (
          <WorkItem item={project} key={project.id} />
        ))}
        <Button link="https://www.github.com/francisamidu" text="Browse All" />
      </div>
    </div>
  );
};

export default Work;
