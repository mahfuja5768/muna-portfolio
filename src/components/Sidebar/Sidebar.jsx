import ContactInfo from "./ContactInfo";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";

const Sidebar = () => {
  return (
    <div className="bg-mediumDark  border border-[#3e3e3e] p-12 rounded-2xl ">
      <div>
        <Profile />
      </div>
      <div>
        <ContactInfo />
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Sidebar;
