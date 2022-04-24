import Link from "next/link";
import { useContext } from "react";
import styles from "./styles.module.scss";
import { GlobalStateContext } from "machines/globalStateContext";
import { useActor } from "@xstate/react";
import Button from "components/navigation/Button";
import { css, cx } from "@emotion/css";
const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const globalState = useContext(GlobalStateContext);
  const [state, send] = useActor(globalState.globalStateService);
  return (
    <div className={styles.layout}>
      <nav className="theme-background">
        <button
          className={cx(
            `text-button text-color`,
            css`
              padding: 0;
            `
          )}
          onClick={() => send("goToHeader")}
        >
          <span className={`${styles.logo} text-color`}>Michał Mikulski</span>
        </button>
      </nav>
      <main>
        <div>
          {children}
          <Button
            nextEvents={state.nextEvents}
            send={send}
            currentState={state.value}
          />
        </div>
      </main>
    </div>
  );
};

export default Layout;
