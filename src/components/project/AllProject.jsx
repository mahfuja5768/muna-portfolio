import { useState } from "react";
import projectData from "../../data/projectData";
import { getImgUrl } from "../../utils/getImageUrl";
import SingleProject from "./SingleProject";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-24 mt-20
      "
      >
        {data?.map((project) => (
          <Link
            onClick={() => handleShowDetails(project?.id)}
            key={project?.id}
            className=" cursor-pointer"
          >
            <motion.div
              className="bg-[#202022] rounded-2xl"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              }}
            >
              <motion.img
                src={getImgUrl(project?.img)}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-2xl h-full md:h-[230px]"
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
                    <FaExternalLinkAlt className=" hover:text-primary text-primary" />
                  </a>
                  <a
                    target="blank"
                    href={project?.github}
                    className="font-bold"
                  >
                    <FaGithub className=" hover:text-primary text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      {showPortal && (
        <SingleProject projectId={projectId} onClose={handleClose} />
      )}
    </div>
  );
};

export default AllProject;
