import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneIphone, MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Separator from "../common/Separator";
import { IoMdMailOpen } from "react-icons/io";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <section className="my-7 ">
      <Separator />

      <motion.div
        className="py-7 grid lg:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <IoMdMailOpen className=" text-xl font-bold text-primary" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">EMAIL</h5>
            <h4 className="text-[14px] ">
              <a href="mailto:mahfujaahsanmuna@gmail.com">
                mahfujaahsanmuna <br /> @gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <MdOutlinePhoneIphone className=" text-xl font-bold text-primary" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">PHONE</h5>
            <h4 className="text-[14px]">
              <a href="tel:+8801677247393">+880 1677-247393</a>
            </h4>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <FaRegCalendarAlt className=" text-xl font-bold text-primary" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">EXPERIENCE</h5>
            <h4 className="text-[15px]">1.5+ years</h4>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
            <MdOutlineLocationOn className=" text-xl font-bold text-primary" />
          </div>
          <div>
            <h5 className="text-[12px] text-[#d6d6d6b2]">LOCATION</h5>
            <h4 className="text-[15px]">Fatullah, Narayanganj, BD</h4>
          </div>
        </div>
      </motion.div>
      <Separator />
    </section>
  );
};

export default ContactInfo;
