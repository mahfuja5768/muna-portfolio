import { GiOpenBook } from "react-icons/gi";
import Title from "../common/Title";
import "./EduStyle.css";

const Edu = () => {
  return (
    <section className="my-8">
      <div className=" flex items-center gap-3">
        <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
          <GiOpenBook className=" text-lg font-bold text-[#e6c668]" />
        </div>
        <Title sTitle title={"Education"} />
      </div>

      <div className="time-line-area flex flex-col gap-8">
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Govt. Tolaram University College</h3>
          <h3 className=" text-lighterYellow mt-1">June, 2021 - present</h3>
          <p>I'm now studying on chemistry on 2nd year.</p>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Narayanganj Govt. Mohila College</h3>
          <h3 className=" text-lighterYellow mt-1">June, 2019 - May, 2021</h3>
          <p>I completed my Higher Secondary Certificate (HSC) in Science.</p>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Dapa Adarsha High School</h3>
          <h3 className=" text-lighterYellow mt-1">May, 2017 - June, 2019</h3>
          <p>I completed my Secondary School Certificate (SSC) in Science.</p>
        </div>
      </div>
    </section>
  );
};

export default Edu;
