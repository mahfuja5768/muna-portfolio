import Title from "../components/common/Title";
import skillData from "../data/skillData";
import { getImgUrl } from "../utils/getImageUrl";
import { motion } from "framer-motion";

const Skills = () => {
  const data = skillData.data;
  return (
    <div>
      <Title title={"Skills"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8">
        {data?.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={getImgUrl(item.img)}
              className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
              alt=""
            />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
