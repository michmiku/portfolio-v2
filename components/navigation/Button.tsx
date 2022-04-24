import { EventObject, Sender, StateValue } from "xstate";
import styles from "./styles.module.scss";

const Button = ({
  nextEvents,
  send,
  currentState,
}: {
  nextEvents: Array<string>;
  send: Sender<EventObject>;
  currentState: StateValue;
}) => {
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
      <ButtonText currentState={currentState} />
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
