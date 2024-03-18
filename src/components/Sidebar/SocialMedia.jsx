import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-5 text-gray-400 text-xl">
      <Link
        to="https://www.linkedin.com/in/ahasanmuna
"
        className=" hover:text-white duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        to="https://github.com/mahfuja5768 
"
        className=" hover:text-white duration-300"
      >
        <FaGithub />
      </Link>
      <Link to="" className=" hover:text-white duration-300">
        <FaTwitter />
      </Link>
      <Link to="" className=" hover:text-white duration-300">
        <FaFacebook />
      </Link>
    </div>
  );
};

export default SocialMedia;
