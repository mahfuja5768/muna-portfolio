import Title from "../components/common/Title";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <Title title={"Contact With Me"} />
      <div className="mt-6">

      <Title sTitle title={"Contact Form"} />
      </div>
      <form action="" className=" mt-5 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Name"
          className=" px-3 py-2 border-b-2 border-darkYellow outline-none rounded w-full bg-transparent "
        />
        <input
          type="email"
          placeholder="Email"
          className="px-3 py-2 border-b-2 outline-none border-darkYellow rounded w-full bg-transparent "
        />
        <input
          type="text"
          placeholder="Your Subject"
          className="px-3 py-2 border-b-2  outline-none border-darkYellow rounded w-full bg-transparent "
        />
        <textarea
          type="text"
          placeholder="Message"
          className="px-3 py-2 border-b-2 outline-none border-darkYellow rounded w-full bg-transparent "
        />
      </form>
      <button
        type="submit"
        className="mt-5 py-4 w-full border border-[#383838] text-center      hover:border-darkYellow duration-300 hover:border-r-transparent hover:border-t-transparent rounded-bl-2xl rounded-tr-xl px-6  text-darkYellow bg-gradient-to-b from-[#e9cb3414] to-[#222223] flex items-center gap-2 text-[15px] font-medium   justify-center hover:bg-gradient-to-b hover:from-[#e9cb342b] hover:to-[#222223]"
      >
        <span>
          <IoIosSend />
        </span>{" "}
        Send Message
      </button>
    </div>
  );
};

export default Contact;
