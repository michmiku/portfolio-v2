import { Component } from "utils/types/types";

const AboutMe = ({ elementRef }: Component) => {
  return (
    <section className="section" ref={elementRef}>
      About me
    </section>
  );
};

export default AboutMe;
