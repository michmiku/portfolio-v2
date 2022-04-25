import styles from "./styles.module.scss";
import Icon from "utils/icons/Icon";
import { ArrowDown } from "utils/icons/feather";
import { motion, AnimatePresence } from "framer-motion";
import { Navigtaion } from "utils/types/types";
import { StateValue } from "xstate";

const Button = ({ send, currentState }: Navigtaion) => {
  return currentState !== "contact" ? (
    <button
      className={`${styles.navigationButton} text-button text-color `}
      onClick={() => {
        switch (currentState) {
          case "header":
            send("goToSkills");
            break;
          case "skills":
            send("goToAboutMe");
            break;
          case "aboutMe":
            send("goToPortfolio");
            break;
          case "portfolio":
            send("goToContact");
            break;
          default:
            break;
        }
      }}
    >
      <motion.div
        className={styles.arrow}
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeatType: "loop",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Icon color={`white`}>{ArrowDown}</Icon>
      </motion.div>
      <ButtonText currentState={currentState} />{" "}
      <motion.div
        className={styles.arrow}
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeatType: "loop",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Icon color={`white`}>{ArrowDown}</Icon>{" "}
      </motion.div>
    </button>
  ) : null;
};

export default Button;

const ButtonText = ({ currentState }: { currentState: StateValue }) => {
  switch (currentState) {
    case "header":
      return <>My skills</>;
    case "skills":
      return <>About Me</>;
    case "aboutMe":
      return <>My portfolio</>;
    case "portfolio":
      return <>Contact</>;
    default:
      return null;
  }
};
