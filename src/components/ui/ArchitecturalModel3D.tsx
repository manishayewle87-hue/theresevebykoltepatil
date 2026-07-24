"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Environment, 
  ContactShadows, 
  Float, 
  Html,
  MeshTransmissionMaterial
} from "@react-three/drei";
import * as THREE from "three";

// --- Types ---
type TowerProps = {
  position: [number, number, number];
  scale: [number, number, number];
  label: string;
  details: string;
  delay?: number;
};

// --- Tower Component ---
function GlassTower({ position, scale, label, details, delay = 0 }: TowerProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  // Subtle floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
        onPointerOut={(e) => { e.stopPropagation(); setHover(false); }}
      >
        <boxGeometry args={scale} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={2}
          roughness={hovered ? 0.1 : 0.4}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={hovered ? "#d4af37" : "#ffffff"}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
        />
        
        {/* HTML Tooltip */}
        <Html 
          position={[0, scale[1] / 2 + 0.5, 0]} 
          center 
          style={{ 
            transition: 'all 0.3s',
            opacity: hovered ? 1 : 0,
            transform: `scale(${hovered ? 1 : 0.8})`,
            pointerEvents: 'none'
          }}
        >
          <div className="bg-black/80 backdrop-blur-md border border-[#d4af37]/30 p-4 w-48 shadow-2xl rounded-sm">
            <span className="text-[#d4af37] text-[8px] uppercase tracking-widest block mb-1">Tower</span>
            <h4 className="text-white font-serif text-lg leading-tight mb-1">{label}</h4>
            <p className="text-white/60 text-xs font-light leading-tight">{details}</p>
          </div>
        </Html>
      </mesh>
      
      {/* Base/Foundation marker */}
      <mesh position={[0, -scale[1]/2 + 0.05, 0]}>
         <planeGeometry args={[scale[0] + 0.2, scale[2] + 0.2]} />
         <meshBasicMaterial color={hovered ? "#d4af37" : "#333333"} transparent opacity={0.5} />
         <primitive object={new THREE.Euler(-Math.PI/2, 0, 0)} attach="rotation" />
      </mesh>
    </group>
  );
}

// --- River Component ---
function River() {
  return (
    <mesh position={[0, -0.4, 4]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 3]} />
      <meshStandardMaterial 
        color="#0a1520" 
        roughness={0.1} 
        metalness={0.8}
        transparent 
        opacity={0.8} 
      />
    </mesh>
  );
}

// --- Main Scene ---
export default function ArchitecturalModel3D() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [8, 5, 8], fov: 35 }}>
        
        <color attach="background" args={['#05140D']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Environment for glass reflections */}
        <Environment preset="city" />

        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <group position={[0, 0, 0]}>
            
            {/* The Masterplan Base */}
            <mesh position={[0, -0.5, 0]} receiveShadow>
              <cylinderGeometry args={[6, 6, 0.2, 64]} />
              <meshStandardMaterial color="#08100a" roughness={0.8} metalness={0.2} />
            </mesh>

            {/* Towers */}
            <GlassTower 
              position={[-2, 1, -1]} 
              scale={[1.2, 3, 1.2]} 
              label="Signature Tower A" 
              details="4.5 BHK Ultra-Luxury Residences"
              delay={0}
            />
            <GlassTower 
              position={[0, 1.5, -2]} 
              scale={[1.2, 4, 1.2]} 
              label="Signature Tower B" 
              details="3 BHK Premium Residences"
              delay={1}
            />
            <GlassTower 
              position={[2, 0.8, -0.5]} 
              scale={[1.2, 2.6, 1.2]} 
              label="Signature Tower C" 
              details="2 & 3 BHK Elite Residences"
              delay={2}
            />
            
            {/* Clubhouse */}
            <GlassTower 
              position={[-1.5, 0.2, 2]} 
              scale={[2, 0.4, 1.5]} 
              label="Club Platinum" 
              details="50,000 sq.ft. of world-class amenities"
              delay={3}
            />

            {/* River feature */}
            <River />
            
          </group>
        </Float>

        {/* Soft shadow on the ground */}
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />

        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={5}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2 - 0.1} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* HUD overlay */}
      <div className="absolute bottom-6 left-6 pointer-events-none">
        <div className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
          WebGL Interactive Engine
        </div>
      </div>
      <div className="absolute top-6 right-6 pointer-events-none text-right">
        <span className="font-serif text-[#d4af37] text-lg block">The Reserve</span>
        <span className="font-sans text-xs tracking-widest text-white/50 uppercase">Digital Twin</span>
      </div>
    </div>
  );
}
