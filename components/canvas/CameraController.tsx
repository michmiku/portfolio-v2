import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    // const controls = new OrbitControls(camera, gl.domElement);
    camera.position.x = 0;
    camera.position.z = 80;
    camera.position.y = 0;
    camera.rotation.x = 0.5;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    // controls.minDistance = 1;
    // controls.maxDistance = 500;
    return () => {
      // controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

export default CameraController;
