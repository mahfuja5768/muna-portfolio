import { useEffect, useState } from "react";
import projectData from "../../data/projectData";
import { IoClose } from "react-icons/io5";
import { getImgUrl } from "../../utils/getImageUrl";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProject = ({ projectId, onClose }) => {
  const [project, setProject] = useState([]);
  const getProjectData = projectData;
  const data = getProjectData.data;

  useEffect(() => {
    const selectedProject = data?.find((item) => item.id === projectId);
    setProject(selectedProject);
  }, [projectId]);

  return (
    <section className="absolute left-0 top-0 h-screen rounded-2xl w-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      <div className="py-16 relative w-full mx-auto bg-mediumDark p-4 border border-slate-600/50 rounded-2xl shadow-lg shadow-slate-400/10">
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-semibold">{project?.title}</h2>
          <img src={getImgUrl(project?.img)} className=" rounded-2xl" alt="" />
          <div className=" flex gap-5">
            <a
              target="blank"
              href={project?.liveUrl}
              className="bg-[#212122] rounded-xl border shadow-xl border-[#383838] flex justify-center items-center hover:border-lighterYellow duration-300 px-4 py-1 text-lg font-bold"
            >
              <span>Live Url</span>{" "}
              <FaExternalLinkAlt className="ms-2  text-[#e6c668]" />
            </a>
            <a
              target="blank"
              href={project?.github}
              className="bg-[#212122] rounded-xl border shadow-xl border-[#383838] flex justify-center items-center hover:border-lighterYellow duration-300 px-4 py-1 text-lg font-bold"
            >
              <span>Code</span> <FaGithub className="ms-2  text-[#e6c668]" />
            </a>
          </div>
          <p>
            <strong className=" text-lighterYellow">Details:</strong>{" "}
            {project?.about}
          </p>
          <p>
            <strong className=" text-lighterYellow">Technologies:</strong>{" "}
            {project?.tech}
          </p>
        </div>
        <button
          onClick={onClose}
          className=" absolute right-0 top-0 m-3 bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1"
        >
          <IoClose className=" text-3xl font-bold text-[#e6c668] hover:text-red-500 duration-300" />
        </button>
      </div>
    </section>
  );
};

export default SingleProject;
