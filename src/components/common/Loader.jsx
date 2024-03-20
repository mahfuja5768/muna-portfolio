// import loderGif from "../../assets/gif/greenLoader.gif";
import loderGif from "../../assets/gif/loader2.gif";

const Loader = () => {
  return (
    <div className=" h-screen bg-[#2a2826] flex justify-center items-center flex-col">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-lighterYellow">
        Welcome To My Portfolio
      </h2>
      <img src={loderGif} alt="loderGif" />
      <h3 className=" text-darkYellow text-xl md:text-2xl mb-2">
        Wishing you have a good day...
      </h3>
    </div>
  );
};

export default Loader;
