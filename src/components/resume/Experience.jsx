import { TbCertificate } from "react-icons/tb";
import Title from "../common/Title";
import "./EduStyle.css";
import { MdFileDownload } from "react-icons/md";

const Experience = () => {
  return (
    <section className="mb-8 md:mt-12 mt-6 relative">
      <div className=" flex items-center gap-3">
        <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
          <TbCertificate className=" text-lg font-bold text-[#e6c668]" />
        </div>
        <Title sTitle title={"Experience"} />
      </div>
      <div className="time-line-area flex flex-col gap-8">
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Self Learning</h3>
          <h3 className=" text-lighterYellow mt-1">July, 2023 - Present</h3>
          <p>
            I complete several projects and enhance my experience. Now, I'm
            learning Redux also.
          </p>
        </div>

        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Complete Web Development Course</h3>
          <h3 className=" text-lighterYellow mt-1">
            July, 2023 - December, 2023
          </h3>
          <p>
            I Completed the <strong>Complete Web Development</strong> by
            Programming Hero. I learn from this course HTML, CSS, JavaScript,
            MongoDB, Express, React.js, Next.js and created many websites.
          </p>
          <a
            target="blank"
            className=" underline text-lighterYellow hover:text-darkYellow"
            href={
              "https://drive.google.com/file/d/1hkidXf0zLI_OeRar95xmQ2E6RtK2VRBy/view?usp=sharing"
            }
          >
            Show Certificate
          </a>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">
            Learn With Summit Advance React and Next.js Course
          </h3>
          <h3 className=" text-lighterYellow mt-1">January, 2023 - Present</h3>
          <p>
            I'm learning this Advance React and Next.js Course for develop my
            skill one level up.
          </p>
        </div>
      </div>
      <a
        target="blank"
        className=" absolute top-0 right-0 "
        href={
          "https://drive.google.com/file/d/1DKQdPCZcIyLIU3MQx_6podjrva2IbBHi/view?usp=drive_link"
        }
      >
        <button className="md:text-[15px] text-[13px]  md:px-6 md:py-2  px-4 py-1 bg-gradient-to-b from-[#f3d700] border border-transparent hover:border hover:border-darkYellow hover:text-[#f3d700] hover:bg-none duration-300 text-black rounded-lg via-[#c79d00] to-[#906400] flex items-center justify-between gap-1">
          Resume{" "}
          <span>
            <MdFileDownload />
          </span>
        </button>
      </a>
    </section>
  );
};

export default Experience;
