import Title from "./../common/Title";
const SkillPercent = () => {
  return (
    <section className="mt-28">
      <Title sTitle title={"My Skills"} />
      <div className="bg-[#202022] p-4 shadow-2xl border border-[#383838] rounded-2xl grid grid-cols-1 gap-6 lg:gap-10 mt-6">
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-5">
            <h4 className="text-lg font-semibold text-white">React JS</h4>
          </div>
          <div
            style={{ width: "95%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Next JS</h4>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Node JS</h4>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Express Js</h4>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Mongo Db</h4>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Javascript</h4>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">HTML5</h4>
          </div>
          <div
            style={{ width: "95%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">CSS3</h4>
          </div>
          <div
            style={{ width: "95%" }}
            className="bg-darkYellow h-[7px] rounded-full "
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Firebase</h4>
          </div>
          <div
            style={{ width: "88%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
        <div className="rounded shadow-2xl ">
          <div className="flex justify-between items-center py-2">
            <h4 className="text-lg font-semibold text-white">Git</h4>
          </div>
          <div
            style={{ width: "94%" }}
            className="bg-darkYellow h-[7px] rounded-full"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SkillPercent;
