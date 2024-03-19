import { TbCertificate } from "react-icons/tb";
import Title from "../common/Title";
import "./EduStyle.css";

const Experience = () => {
  return (
    <section className="my-8">
      <div className=" flex items-center gap-3">
        <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
          <TbCertificate className=" text-lg font-bold text-[#e6c668]" />
        </div>
        <Title sTitle title={"Experience"} />
      </div>
      <div className="w-1 h-full bg-gray-400 mr-4"></div>

      <div className="time-line-area flex flex-col gap-12">
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
    </section>
  );
};

export default Experience;
