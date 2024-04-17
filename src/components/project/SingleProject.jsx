import { useEffect, useState, useRef } from "react";
import projectData from "../../data/projectData";
import { IoClose } from "react-icons/io5";
import { getImgUrl } from "../../utils/getImageUrl";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SingleProject.css"; // Import CSS file for styles

const SingleProject = ({ projectId, onClose }) => {
  const [project, setProject] = useState([]);
  const getProjectData = projectData;
  const data = getProjectData.data;
  const bodyRef = useRef(document.body);

  useEffect(() => {
    const selectedProject = data?.find((item) => item.id === projectId);
    setProject(selectedProject);

    bodyRef.current.style.overflow = "hidden";

    return () => {
      bodyRef.current.style.overflow = "auto";
    };
  }, [projectId]);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <section className="project-modal">
        <div className="py-8 relative w-full mx-auto bg-mediumDark px-6 border border-slate-600/50 rounded-2xl shadow-lg shadow-slate-400/10">
          <div className="flex flex-col gap-7">
            <h2 className="text-2xl font-semibold">{project?.title}</h2>
            <img src={getImgUrl(project?.img)} className=" rounded-2xl" alt="" />
            <div className="flex flex-wrap gap-5">
              <a
                target="blank"
                href={project?.liveUrl}
                className="project-link"
              >
                <span>Live Url</span>{" "}
                <FaExternalLinkAlt className="icon" />
              </a>
              <a
                target="blank"
                href={project?.github}
                className="project-link"
              >
                <span>Code</span> <FaGithub className="icon" />
              </a>
            </div>
            <p>
              <strong className="text-lighterYellow">Details:</strong>{" "}
              {project?.about}
            </p>
            <p>
              <strong className="text-lighterYellow">Technologies:</strong>{" "}
              {project?.tech}
            </p>
          </div>
          <button
            onClick={onClose}
            className="close-button"
          >
            <IoClose className="icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
