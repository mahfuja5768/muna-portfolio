import ProfilePic from "../../assets/muna copy.jpg";
import { motion } from "framer-motion";
const Profile = () => {
  return (
    <section>
      <div className="flex gap-6 lg:flex-col lg:gap-1 lg:justify-center items-center">
        <img
          src={ProfilePic}
          className=" rounded-2xl w-[120px] h-[130px] lg:mx-auto"
          alt="ProfilePic"
        />
        <div>
          <motion.div
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
            <h2 className=" md:text-center md:text-xl lg:text-2xl mt-5 mb-3  font-semibold">
              Mahfuja Ahasan
            </h2>
          </motion.div>

          <p className=" bg-[#2b2b2c] w-full sm:w-[152px] rounded-lg flex  justify-center text-[12px] py-1 px-4 mb-3">
            Web Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
