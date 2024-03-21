import Doing from "../components/about/Doing";
import MyInfo from "../components/about/MyInfo";
import PortfolioSlide from "../components/about/PortfolioSlide";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div >
        <MyInfo />
      </motion.div>
      <Doing />
      <PortfolioSlide />
    </div>
  );
};

export default About;
