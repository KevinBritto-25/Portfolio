import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const cube = useGLTF("./cube/scene.gltf");
  const meshRef = useRef();

  // Rotate the cube
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the speed here
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={cube.scene}
      scale={5.5}
      position={[0, -2, 0]}
    />
  );
};

const CubeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.2,
        far: 10,
        position: [4, 3, 0],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Lighting Setup */}
        <ambientLight intensity={1} /> {/* Soft ambient light */}
        <hemisphereLight intensity={0.15} groundColor='black' color={"blue"} />
        <directionalLight
          position={[-1, -1, -1]}
          intensity={10}
          color="yellow"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        /> {/* Directional light for highlights */}
        <pointLight
          intensity={1}
          color={"blue"}
        />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CubeCanvas;
