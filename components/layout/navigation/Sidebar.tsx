import { css, cx } from "@emotion/css";
import { Navigtaion } from "utils/types/types";
import styles from "./styles.module.scss";

const Sidebar = ({ send, currentState }: Navigtaion) => {
  return (
    <div className={styles.navigationSidebar}>
      <button
        onClick={() => send("goToSkills")}
        className={cx(
          `text-button ${currentState == "skills" ? `${styles.active}` : ""}`,
          css``
        )}
      >
        My Skills
      </button>
      <button
        onClick={() => send("goToAboutMe")}
        className={cx(
          `text-button ${currentState == "aboutMe" ? `${styles.active}` : ""}`,
          css``
        )}
      >
        About Me
      </button>
      <button
        onClick={() => send("goToPortfolio")}
        className={cx(
          `text-button ${
            currentState == "portfolio" ? `${styles.active}` : ""
          }`,
          css``
        )}
      >
        Portfolio
      </button>
      <button
        onClick={() => send("goToContact")}
        className={cx(
          `text-button ${currentState == "contact" ? `${styles.active}` : ""}`,
          css``
        )}
      >
        Contact
      </button>
    </div>
  );
};

export default Sidebar;
