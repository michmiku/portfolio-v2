import type { NextPage } from "next";
import Header from "components/header";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GlobalStateContext } from "machines/globalStateContext";
import { useActor } from "@xstate/react";
import Skills from "components/skills";
import AboutMe from "components/about-me";
import Portfolio from "components/portfolio";
import Contact from "components/contact";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "utils/hooks/useWindowDimensions";

const Home: NextPage = () => {
  const globalState = useContext(GlobalStateContext);
  const [state, send] = useActor(globalState.globalStateService);
  const [scrollDisabled, setscrollDisabled] = useState<boolean>(false);
  const { height, width } = useWindowDimensions();

  const onScroll = useCallback(
    (e: WheelEvent) => {
      let dir = e?.deltaY < 0 ? "up" : "down";
      if (!scrollDisabled) {
        setscrollDisabled(true);
        setTimeout(() => {
          setscrollDisabled(false);
        }, 500);

        switch (state.value) {
          case "header": {
            if (dir == "down") send("goToSkills");
            break;
          }
          case "skills": {
            if (dir == "down") send("goToAboutMe");
            else send("goToHeader");
            break;
          }
          case "aboutMe": {
            if (dir == "down") send("goToPortfolio");
            else send("goToSkills");
            break;
          }
          case "portfolio": {
            if (dir == "down") send("goToContact");
            else send("goToAboutMe");
            break;
          }
          case "contact": {
            if (dir == "up") send("goToPortfolio");
            break;
          }
          default: {
            break;
          }
        }
      }
    },
    [state.value, scrollDisabled]
  );

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, [onScroll]);
  useEffect(() => {
    console.log(state.value);
    if (state.value == "header") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (state.value == "skills") {
      window.scrollTo({
        top: height,
        behavior: "smooth",
      });
    } else if (state.value == "aboutMe") {
      window.scrollTo({
        top: height * 2,
        behavior: "smooth",
      });
    } else if (state.value == "portfolio") {
      window.scrollTo({
        top: height * 3,
        behavior: "smooth",
      });
    } else if (state.value == "contact") {
      window.scrollTo({
        top: height * 4,
        behavior: "smooth",
      });
    }
  }, [state.value]);

  return (
    <>
      <Header />
      <Skills />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
