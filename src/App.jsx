import Sidebar from "./components/Sidebar/Sidebar";
import MainLayout from "./components/main/MainLayout";

const App = () => {
  return (
    <main className="my-16 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div>
        <Sidebar />
      </div>
      <div className=" lg:col-span-3">
        <MainLayout />
      </div>
    </main>
  );
};

export default App;
