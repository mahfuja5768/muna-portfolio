import { useState } from "react";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Skills from "../../pages/Skills";

const MainLayout = () => {
  const [page, setPage] = useState("");
  let content;
  console.log(page);

  if (page === "About") {
    content = <About />;
  }
  if (page === "Resume") {
    content = <Resume />;
  }
    if (page === "Skills") {
      content = <Skills />;
    }
  return (
    // <div className="bg-mediumDark  rounded-2xl  border border-[#3e3e3e] p-12">
    //   <div>
    //     <ul>
    //       <li className="" onClick={setPage("About")}>
    //         About
    //       </li>
    //       <li className="" onClick={setPage("Resume")}>
    //         Resume
    //       </li>
    //       <li className="" onClick={setPage("Skills")}>
    //         Skills
    //       </li>
    //     </ul>
    //   </div>
    //   <div>{content}</div>
    // </div>
    <div className="bg-mediumDark  rounded-2xl  border border-[#3e3e3e] p-12">
      <div>
        <ul className=" flex gap-5">
          <li className="">
            <button onClick={() => setPage("About")}>About</button>
          </li>
          <li className="">
            <button onClick={() => setPage("Resume")}>Resume</button>
          </li>
          <li className="">
            <button onClick={() => setPage("Skills")}>Skills</button>
          </li>
        </ul>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default MainLayout;
