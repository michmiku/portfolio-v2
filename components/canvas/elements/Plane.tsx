import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BufferAttribute, DoubleSide, Vector3 } from "three";
import gsap from "gsap";

interface Color {
  r: number;
  g: number;
  b: number;
}

const initialColor: Color = {
  r: 0.01,
  g: 0.01,
  b: 0.01,
};

let frame: number = 0;
const randomValues: Array<number> = [];
const Plane = ({}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [originalPosition, setOriginalPosition] = useState(
    ref?.current?.geometry?.attributes?.position?.array
  );

  useFrame((state, delta) => {
    frame += 0.01;
    let { array }: any = ref?.current?.geometry?.attributes?.position;
    for (let index = 0; index < array.length; index += 3) {
      if (originalPosition) {
        array[index] =
          originalPosition[index] +
          Math.cos(frame + randomValues[index]) * 0.006;
        ref.current.geometry.attributes.position.needsUpdate = true;
        array[index + 1] =
          originalPosition[index + 1] +
          Math.sin(frame + randomValues[index + 1]) * 0.006;
        ref.current.geometry.attributes.position.needsUpdate = true;
      }

      // const y = array[index + 1];
      // const z = array[index + 2];
    }
  });

  useEffect(() => {
    if (ref?.current) {
      setOriginalPosition(ref?.current?.geometry?.attributes?.position?.array);
      let {
        geometry: { attributes },
      }: any = ref?.current ?? {};

      let { position } = attributes;
      let { array } = position;
      for (let index = 0; index < array.length; index++) {
        if (index % 3 === 0) {
          const x = array[index];
          const y = array[index + 1];
          const z = array[index + 2];
          array[index] = x + (Math.random() - 0.5) * 3;
          array[index + 1] = y + (Math.random() - 0.5) * 3;
          array[index + 2] = z + (Math.random() - 0.5) * 3;
        }
        randomValues.push(Math.random() * Math.PI * 2);
      }
      const colors = [];
      for (let index = 0; index < position.count; index++) {
        colors.push(initialColor?.r, initialColor?.g, initialColor?.b);
      }
      ref?.current?.geometry?.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colors), 3)
      );
    }
  }, []);

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        ref={ref}
        onPointerMove={({ face }: ThreeEvent<PointerEvent>) => {
          if (face) {
            const { color } = ref.current.geometry.attributes;
            const hoverColor: Color = {
              r: 0.03,
              g: 0.03,
              b: 0.03,
            };
            const { r, g, b } = hoverColor;
            color.setX(face.a, r);
            color.setY(face.a, g);
            color.setZ(face.a, b);

            color.setX(face.b, r);
            color.setY(face.b, g);
            color.setZ(face.b, b);

            color.setX(face.c, r);
            color.setY(face.c, g);
            color.setZ(face.c, b);

            color.needsUpdate = true;

            gsap.to(hoverColor, {
              r: initialColor.r,
              g: initialColor.g,
              b: initialColor.b,
              onUpdate: () => {
                color.setX(face.a, hoverColor.r);
                color.setY(face.a, hoverColor.g);
                color.setZ(face.a, hoverColor.b);

                color.setX(face.b, hoverColor.r);
                color.setY(face.b, hoverColor.g);
                color.setZ(face.b, hoverColor.b);

                color.setX(face.c, hoverColor.r);
                color.setY(face.c, hoverColor.g);
                color.setZ(face.c, hoverColor.b);
              },
            });
          }
        }}
      >
        <planeGeometry args={[500, 500, 60, 60]} />
        <meshPhongMaterial
          side={DoubleSide}
          flatShading={true}
          vertexColors={true}
        />
      </mesh>
    </>
  );
};

export default Plane;
