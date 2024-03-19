import { useState } from "react";
import projectData from "../../data/projectData";
import { getImgUrl } from "../../utils/getImageUrl";
import SingleProject from "./SingleProject";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const AllProject = () => {
  const [showPortal, setShowPortal] = useState(false);
  const [projectId, setProjectId] = useState([]);
  const projects = projectData;
  const data = projects.data;

  const handleShowDetails = (id) => {
    setProjectId(id);
    setShowPortal(true);
  };

  const handleClose = () => {
    setShowPortal(false);
  };

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9
      "
      >
        {data?.map((project) => (
          <a
            onClick={() => handleShowDetails(project?.id)}
            key={project?.id}
            className=" cursor-pointer"
          >
            <div className="bg-[#202022] rounded-2xl">
              <img
                src={getImgUrl(project?.img)}
                className="w-full rounded-2xl md:h-[230px]"
                alt=""
              />
              <div className="flex items-center justify-between px-3 py-4 pb-5 ">
                <h3 className="text-lg md:text-2xl font-bold">
                  {project?.title}
                </h3>
                <div className=" flex gap-7 justify-between">
                  <a
                    target="blank"
                    href={project?.liveUrl}
                    className=" font-bold"
                  >
                    <FaExternalLinkAlt className=" hover:text-darkYellow text-lighterYellow" />
                  </a>
                  <a
                    target="blank"
                    href={project?.github}
                    className="font-bold"
                  >
                    <FaGithub className=" hover:text-darkYellow text-lighterYellow" />
                  </a>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {showPortal && (
        <SingleProject projectId={projectId} onClose={handleClose} />
      )}
    </div>
  );
};

export default AllProject;
