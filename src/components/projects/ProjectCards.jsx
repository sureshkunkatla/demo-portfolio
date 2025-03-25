import React from "react";

const ProjectCards = ({ project }) => {
  return (
    <div
      className={`flex flex-col ${
        project.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
      } justify-between items-center mt-10`}
    >
      <div className="w-[100%] md:w-[50%]">
        <a href={project.projectLink} target="_blank" className="w-[100%]">
          <img
            src={project.projectImg}
            alt={project.projectImgAlt}
            className="w-[100%] max-w-[600px] p-4 rounded-4xl hover:opacity-35"
            loading="lazy"
          />
        </a>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <h3 className="text-goldenYellow text-2xl font-semibold">
          {project.projectName}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-300">{project.projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
