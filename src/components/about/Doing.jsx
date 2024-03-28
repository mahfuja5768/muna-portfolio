import Title from "../common/Title";
import { TbReplace } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { LuReplace } from "react-icons/lu";
import { BsFiletypeHtml } from "react-icons/bs";

const Doing = () => {
  return (
    <section className="my-16">
      <Title sTitle title={"What I'm Doing"} />
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-4 items-start">
          <div>
            <MdDeveloperMode className="text-4xl text-darkYellow" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Web Development</h2>
            <p className="text-[15px] pt-1">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </div>

        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-2 items-start">
          <div>
            <BsFiletypeHtml className="text-4xl text-darkYellow" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">PSD To Html</h2>
            <p className="text-[15px] pt-1">Convert psd with Html, CSS</p>
          </div>
        </div>

        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-5 items-start">
          <div>
            <TbReplace className="text-4xl text-darkYellow" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Figma Design Convert</h2>
            <p className="text-[15px] pt-1">
              Convert figma design with html, css, react
            </p>
          </div>
        </div>

        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-2 items-start">
          <div>
            <LuReplace className="text-4xl text-darkYellow" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Html To React</h2>
            <p className="text-[15px] pt-1">Convert html code in react</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doing;
