import Title from "../components/common/Title";
import skillData from "../data/skillData";
import { getImgUrl } from "../utils/getImageUrl";

const Skills = () => {
  const data = skillData.data;
  console.log(data);
  return (
    <div>
      <Title title={"Skills"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8">
        {data?.map((item) => (
          <div key={item.id}>
            <img src={getImgUrl(item.img)} className=" hover:bg-transparent hover:w-[140px] hover:scale-100 hover:z-10 duration-300 cursor-pointer w-[140px] h-[140px] bg-white rounded-2xl p-2" alt="" />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
