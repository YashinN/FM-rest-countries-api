import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackArrow from "../Icons/BackArrow";

const backVariant = {
  hidden: { y: "-100vw" },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const BackButton = ({ darkMode, styles }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <motion.button
      variants={backVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      id={darkMode ? "dark" : "light"}
      className={styles.back_btn}
      onClick={handleBack}
    >
      <BackArrow darkMode={darkMode} />
      Back
    </motion.button>
  );
};

export default BackButton;
