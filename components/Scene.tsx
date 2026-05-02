"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  useGLTF, 
  Environment, 
  ContactShadows, 
  Html, 
  useProgress,
  Center,
  Stage
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4 w-64 text-center">
        <div className="w-full h-px bg-[#2c2c2c]/10 overflow-hidden">
          <div 
            className="h-full bg-[#2c2c2c] transition-all duration-300" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <span className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 text-[#2c2c2c]">
          Loading Masterpiece {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
}

function HeadphoneModel() {
  const { scene } = useGLTF("/headphone.glb");
  const modelRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (modelRef.current) {
      // Mouse follow effect (subtle tilt)
      const targetRotationX = mouse.y * 0.1;
      const targetRotationY = mouse.x * 0.1;
      
      modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetRotationX, 0.05);
      modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  return (
    <Center>
      <primitive ref={modelRef} object={scene} />
    </Center>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-auto">
      <Canvas dpr={[1, 2]} shadows gl={{ antialias: true, preserveDrawingBuffer: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        <Suspense fallback={<Loader />}>
          <Stage 
            intensity={0.6} 
            environment="studio" 
            shadows={{ type: 'contact', opacity: 0.2, blur: 3 }} 
            adjustCamera={1.2}
          >
            <HeadphoneModel />
          </Stage>
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/headphone.glb");
