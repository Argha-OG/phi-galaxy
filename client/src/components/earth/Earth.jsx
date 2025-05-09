
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Earth(props) {
  const { nodes, materials } = useGLTF("/earth.gltf");
  const earthRef = useRef(); 

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1}
        ref={earthRef}
      />
    </group>
  );
}

useGLTF.preload("./../../../public/earth.gltf");
