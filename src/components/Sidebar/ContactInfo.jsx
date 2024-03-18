import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneIphone, MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Separator from "../common/Separator";

const ContactInfo = () => {
  return (
    <section className="my-7 ">
      <Separator />

      <div className="py-7 grid lg:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <CiMail className=" text-lg font-bold text-[#e6c668]" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">EMAIL</h5>
            <h4 className="text-[12px]">
              mahfujaahsanmuna <br />
              @gmail.com
            </h4>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <MdOutlinePhoneIphone className=" text-lg font-bold text-[#e6c668]" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">PHONE</h5>
            <h4 className="text-[15px]">+880 1677247393</h4>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <FaRegCalendarAlt className=" text-lg font-bold text-[#e6c668]" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">EXPERIENCE</h5>
            <h4 className="text-[15px]">1.5+ year</h4>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <MdOutlineLocationOn className=" text-lg font-bold text-[#e6c668]" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">LOCATION</h5>
            <h4 className="text-[15px]">Fatullah, Narayanganj</h4>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
};

export default ContactInfo;
