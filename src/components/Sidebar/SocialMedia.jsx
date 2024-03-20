import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex justify-end gap-6 pr-2 text-gray-400 text-xl">
      <a
        title="blank"
        href="https://www.linkedin.com/in/ahasanmuna
"
        className=" hover:text-white duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        title="blank"
        href="https://github.com/mahfuja5768 
"
        className=" hover:text-white duration-300"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
