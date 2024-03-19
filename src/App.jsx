import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainLayout from "./components/main/MainLayout";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [page, setPage] = useState("Projects");
  let content;

  if (page === "About") {
    content = <About />;
  }
  if (page === "Resume") {
    content = <Resume />;
  }
  if (page === "Skills") {
    content = <Skills />;
  }
  if (page === "Projects") {
    content = <Projects />;
  }
  if (page === "Contact") {
    content = <Contact />;
  }
  return (
    <main className="">
      <div className="my-16 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-9">
        <div>
          <Sidebar />
        </div>
        <div className=" lg:col-span-3">
          <MainLayout page={page} setPage={setPage} content={content} />
        </div>
      </div>
      <div className="fixed z-10 backdrop-blur-md  md:hidden  bottom-0 left-0 right-0 h-[56px] rounded-t-2xl flex justify-center flex-wrap  items-center px-3 bg-[#34333455] ">
        <Navbar page={page} setPage={setPage} />
      </div>
    </main>
  );
};

export default App;
