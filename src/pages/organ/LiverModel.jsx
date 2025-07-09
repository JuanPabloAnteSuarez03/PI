import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';

function Model({ path, scale = 5 }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if(scene){
      scene.traverse((child) => {
        if(child.isMesh){
          child.castShadow = true;
          child.recieveShadow = true;
        }
      })
    }
  }, [scene])

  return (
    <Center>
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        position={[0, 0, 0]}
      />
    </Center>
  );
}

export default function LiverModelHome({ modelPath, scale }) {
  return (
    <Canvas style={{ width: '800px', height: '400px' }} shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={25} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow/>
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff"/>
      <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
        >
           <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
      <OrbitControls />
      {/* Aquí puedes pasar el scale que necesites */}
      <Model path={modelPath} scale={scale} />
    </Canvas>
  );
}
