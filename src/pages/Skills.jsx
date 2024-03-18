import Title from "../components/common/Title";
import skillData from "../data/skillData";

const Skills = () => {
  const data = [
    {
      id: 0,
      img: "html.pmg",
      name: "HTML",
    },
    {
      id: 1,
      img: "css.pmg",
      name: "CSS",
    },
    {
      id: 2,
      img: "js.pmg",
      name: "JavaScript",
    },
    {
      id: 3,
      img: "figma.pmg",
      name: "Figma",
    },
    {
      id: 4,
      img: "git.pmg",
      name: "Git",
    },
    {
      id: 5,
      img: "mongo.pmg",
      name: "Mongo",
    },
    {
      id: 6,
      img: "ex.pmg",
      name: "Express",
    },
    {
      id: 7,
      img: "mui.pmg",
      name: "Material UI",
    },
    {
      id: 8,
      img: "node.webp",
      name: "Node.js",
    },
    {
      id: 9,
      img: "tail.png",
      name: "Node.js",
    },
    {
      id: 10,
      img: "vercel.png",
      name: "Vercel.js",
    },
    {
      id: 11,
      img: "redux.png",
      name: "Redux.js",
    },
  ];
  console.log('d', data);
  return (
    <div>
      <Title title={"skills"} />
      <div>
        {
            data?.map(item=> <div key={item.id}>{item.name} </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
