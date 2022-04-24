import React, { useRef, useMemo } from "react";
import { PointLightProps, useFrame } from "@react-three/fiber";
import { Object3D } from "three";

export function SpaceDust({ count }: { count: number }) {
  const mesh = useRef<any>(null!);
  const light = useRef<any>(null!);

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.floor(Math.random() * (+100 - +0)) + +0;
      const factor = Math.floor(Math.random() * (+120 - +20)) + +20;
      const speed = (Math.floor(Math.random() * (+0.015 - +0.01)) + +0.01) / 2;
      const x = Math.floor(Math.random() * (+80 - -80)) + -80;
      const y = Math.floor(Math.random() * (+80 - -80)) + -80;
      const z = Math.floor(Math.random() * (+80 - -80)) + -80;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new Object3D(), []);

  useFrame(() => {
    if (mesh?.current) {
      // Run through the randomized data to calculate some movement
      particles.forEach((particle, index) => {
        let { factor, speed, x, y, z } = particle;

        // Update the particle time
        const t = (particle.time += speed);

        // Update the particle position based on the time
        // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
        dummy.position.set(
          x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );

        // Derive an oscillating value which will be used
        // for the particle size and rotation
        const s = Math.cos(t);
        dummy.scale.set(s, s, s);
        dummy.rotation.set(s * 5, s * 5, s * 5);
        dummy.updateMatrix();

        // And apply the matrix to the instanced item
        mesh.current.setMatrixAt(index, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={150} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronBufferGeometry args={[0.2, 10]} />
        <meshPhongMaterial color="#484848" />
      </instancedMesh>
    </>
  );
}
