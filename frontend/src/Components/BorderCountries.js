import { motion } from "framer-motion";

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

const borderVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const BorderCountries = ({
  styles,
  borderCountries,
  onBorderCountry,
  darkMode,
}) => {
  return (
    <div className={styles.borders_container}>
      <p className="m-0">
        <strong>Border Countries:</strong>
      </p>
      <motion.div
        className={styles.border_btns}
        variants={borderVariants}
        initial="hidden"
        whileInView="visible"
      >
        {borderCountries?.map((code) => (
          <motion.button
            variants={childVariants}
            id={darkMode ? "dark" : "light"}
            onClick={() => onBorderCountry(code)}
            className={styles.border_btn}
          >
            {code}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default BorderCountries;
