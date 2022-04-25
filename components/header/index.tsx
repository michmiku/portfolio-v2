import { css, cx } from "@emotion/css";
import ThreeScene from "components/canvas";
import { RefObject } from "react";
import { Component } from "utils/types/types";
import styles from "./styles.module.scss";

const Header = ({ elementRef }: Component) => {
  return (
    <header className={cx(`${styles.header} section`, css``)} ref={elementRef}>
      <ThreeScene />
      <div className={styles.heading}>
        <h1 className="text-color">
          Michał Mikulski<span>Web Developer</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
