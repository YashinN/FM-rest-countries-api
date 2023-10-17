import { motion } from "framer-motion";

const imageVariant = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const CountryDetailsImage = ({ styles, selectedCountry }) => {
  const { flags } = selectedCountry[0];
  return (
    <motion.div
      className={`container p-0 ${styles.img_wrapper}`}
      variants={imageVariant}
      animate="visible"
      initial="hidden"
    >
      <img className={styles.country_img} src={flags.svg} alt="" />
    </motion.div>
  );
};

export default CountryDetailsImage;
