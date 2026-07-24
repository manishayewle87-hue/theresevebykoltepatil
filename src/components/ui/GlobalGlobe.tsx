/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

// Pre-calculated coordinates for cities [lat, lon]
const PUNE = [18.5204, 73.8567];
const DUBAI = [25.2048, 55.2708];
const LONDON = [51.5072, -0.1276];
const NEW_YORK = [40.7128, -74.0060];

// Convert Lat/Lon to 3D Cartesian coordinates on a sphere of radius R
function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
}

// Generate a cubic bezier curve between two points on the sphere
function Curve({ start, end, radius }: { start: number[], end: number[], radius: number }) {
  const curve = useMemo(() => {
    const vStart = latLongToVector3(start[0], start[1], radius);
    const vEnd = latLongToVector3(end[0], end[1], radius);
    
    // Control points to make the arc pop off the globe
    const midPoint = vStart.clone().add(vEnd).multiplyScalar(0.5);
    const distance = vStart.distanceTo(vEnd);
    midPoint.normalize().multiplyScalar(radius + distance * 0.3);

    return new THREE.QuadraticBezierCurve3(vStart, midPoint, vEnd);
  }, [start, end, radius]);

  const points = useMemo(() => curve.getPoints(50), [curve]);
  
  // Use a tube geometry to draw the glowing arc
  return (
    <mesh>
      <tubeGeometry args={[curve, 50, 0.02, 8, false]} />
      <meshBasicMaterial color="#d4af37" transparent opacity={0.6} />
    </mesh>
  );
}

// City marker with HTML label
function CityMarker({ lat, lon, radius, label, isPrimary = false }: { lat: number, lon: number, radius: number, label: string, isPrimary?: boolean }) {
  const pos = latLongToVector3(lat, lon, radius);
  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[isPrimary ? 0.08 : 0.04, 16, 16]} />
        <meshBasicMaterial color={isPrimary ? "#ffffff" : "#d4af37"} />
      </mesh>
      {isPrimary && (
        <Html distanceFactor={15}>
          <div className="bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 text-white text-[8px] tracking-widest uppercase rounded whitespace-nowrap transform -translate-x-1/2 -translate-y-full mt-[-10px]">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

function Earth() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Slowly rotate the earth
      groupRef.current.rotation.y += 0.001;
    }
  });

  const R = 3;

  return (
    <group ref={groupRef} rotation={[0.2, -1.5, 0]}>
      {/* The Globe (Wireframe/Dark) */}
      <Sphere args={[R, 64, 64]}>
        <meshStandardMaterial 
          color="#09090b" 
          emissive="#18181b"
          wireframe={true} 
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      {/* Solid Inner Core to hide back lines */}
      <Sphere args={[R * 0.98, 32, 32]}>
         <meshBasicMaterial color="#000000" />
      </Sphere>

      {/* Markers & Arcs */}
      <CityMarker lat={PUNE[0]} lon={PUNE[1]} radius={R} label="The Reserve, Pune" isPrimary />
      <CityMarker lat={DUBAI[0]} lon={DUBAI[1]} radius={R} label="Dubai" />
      <CityMarker lat={LONDON[0]} lon={LONDON[1]} radius={R} label="London" />
      <CityMarker lat={NEW_YORK[0]} lon={NEW_YORK[1]} radius={R} label="New York" />

      <Curve start={PUNE} end={DUBAI} radius={R} />
      <Curve start={PUNE} end={LONDON} radius={R} />
      <Curve start={PUNE} end={NEW_YORK} radius={R} />
    </group>
  );
}

export default function GlobalGlobe() {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[700px] relative cursor-move">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#d4af37" />
        <Earth />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
      <div className="absolute bottom-8 left-8 text-white/50 text-[10px] tracking-[0.2em] uppercase pointer-events-none">
        Global Connectivity Map
      </div>
    </div>
  );
}
