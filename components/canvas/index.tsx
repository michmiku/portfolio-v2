import React from "react";
import { Canvas } from "@react-three/fiber";
import useWindowDimensions from "utils/hooks/useWindowDimensions";
import CameraController from "./CameraController";
import { AxesHelper, Color } from "three";
import Plane from "./elements/Plane";
import { SpaceDust } from "./elements/Particles";
import styles from "./styles.module.scss";
import { css, cx } from "@emotion/css";
const ThreeScene = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Canvas
      className={cx(
        `${styles.canvas}`,
        css`
          width: ${width}px !important;
          height: ${height}px !important;
        `
      )}
    >
      <CameraController />
      {/* <primitive object={new AxesHelper(100)} /> */}
      <Plane />
      <SpaceDust count={500} />
      <spotLight position={[0, 110, 900]} angle={Math.PI / 5} penumbra={1} />
      {/* <directionalLight position={[0, -1, 4]} />
      <directionalLight position={[0, 0, -1]} /> */}
    </Canvas>
  );
};

export default ThreeScene;
