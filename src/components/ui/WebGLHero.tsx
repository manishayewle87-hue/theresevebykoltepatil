"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function ArchitecturalAbstract() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05; // Slower, more elegant rotation
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, (state.pointer.x), 0.02);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, (state.pointer.y), 0.02);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Onyx/Glass Block */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <RoundedBox args={[2, 3, 2]} radius={0.05} position={[-1, 0, 0]}>
          <MeshDistortMaterial 
            color="#09090b" 
            envMapIntensity={2} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.9}
            roughness={0.1}
            distort={0.1}
            speed={1}
          />
        </RoundedBox>
      </Float>
      
      {/* Frosted Glass Block */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={1}>
        <RoundedBox args={[2.5, 4, 1]} radius={0.05} position={[1.5, -0.5, -1]}>
          <meshPhysicalMaterial 
            color="#ffffff" 
            transmission={0.95} 
            opacity={1} 
            metalness={0.2} 
            roughness={0.1} 
            ior={1.5} 
            thickness={0.5} 
          />
        </RoundedBox>
      </Float>
      
      {/* Champagne Gold Wireframe Accent */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 2, 1]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#d4af37" wireframe={true} emissive="#d4af37" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

export default function WebGLHero() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#d4af37" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        <Environment preset="studio" />
        <ArchitecturalAbstract />
      </Canvas>
    </div>
  );
}
