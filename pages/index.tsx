import type { NextPage } from "next";
import Header from "components/header";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GlobalStateContext } from "machines/globalStateContext";
import { useActor } from "@xstate/react";
import Skills from "components/skills";
import AboutMe from "components/about-me";
import Portfolio from "components/portfolio";
import Contact from "components/contact";
import useWindowDimensions from "utils/hooks/useWindowDimensions";
import { useSwipeable, SwipeEventData } from "react-swipeable";

const Home: NextPage = () => {
  const globalState = useContext(GlobalStateContext);
  const [state, send] = useActor(globalState.globalStateService);
  const [scrollDisabled, setscrollDisabled] = useState<boolean>(false);
  const { height, width } = useWindowDimensions();
  const header = useRef<HTMLElement>(null);
  const skills = useRef<HTMLElement>(null);
  const aboutMe = useRef<HTMLElement>(null);
  const portfolio = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);

  const handleLocationChange = (dir: string) => {
    if (!scrollDisabled) {
      setscrollDisabled(true);
      setTimeout(() => {
        setscrollDisabled(false);
      }, 500);

      switch (state.value) {
        case "header": {
          if (dir == "Up") send("goToSkills");
          break;
        }
        case "skills": {
          if (dir == "Up") send("goToAboutMe");
          else send("goToHeader");
          break;
        }
        case "aboutMe": {
          if (dir == "Up") send("goToPortfolio");
          else send("goToSkills");
          break;
        }
        case "portfolio": {
          if (dir == "Up") send("goToContact");
          else send("goToAboutMe");
          break;
        }
        case "contact": {
          if (dir == "Down") send("goToPortfolio");
          break;
        }
        default: {
          break;
        }
      }
    }
  };
  const onScroll = useCallback(
    (e: WheelEvent) => {
      let dir = e?.deltaY < 0 ? "Down" : "Up";
      handleLocationChange(dir);
    },
    [state.value, scrollDisabled]
  );
  const handlers = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      handleLocationChange(eventData.dir);
    },
    delta: 70, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  });
  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, [onScroll]);
  useEffect(() => {
    if (state.value == "header") {
      let top = header.current?.offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    } else if (state.value == "skills") {
      let top = skills.current?.offsetTop;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    } else if (state.value == "aboutMe") {
      let top = aboutMe.current?.offsetTop;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    } else if (state.value == "portfolio") {
      let top = portfolio.current?.offsetTop;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    } else if (state.value == "contact") {
      let top = contact.current?.offsetTop;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  }, [state.value]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} {...handlers}>
      <Header elementRef={header} />
      <Skills elementRef={skills} />
      <AboutMe elementRef={aboutMe} />
      <Portfolio elementRef={portfolio} />
      <Contact elementRef={contact} />
    </div>
  );
};

export default Home;
