import ProfilePic from "../../assets/muna copy.jpg";
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
          <h2 className=" text-center text-xl mt-5 mb-3  font-semibold">
            Mahfuja Ahasan
          </h2>
          <p className=" bg-[#2b2b2c] w-full sm:w-[152px] rounded-lg flex  justify-center text-[12px] py-1 px-4 mb-3">
            Frontend Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
