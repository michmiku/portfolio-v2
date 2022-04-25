import ThreeScene from "components/canvas";
import { RefObject } from "react";
import { Component } from "utils/types/types";
import styles from "./styles.module.scss";
const Skills = ({ elementRef }: Component) => {
  return (
    <section className="section" ref={elementRef}>
      <div className={styles.heading}>
        <h1 className="text-color">Skills</h1>
      </div>
    </section>
  );
};

export default Skills;
