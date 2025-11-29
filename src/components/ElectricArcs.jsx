import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ElectricArcs = ({ count = 15, radius = 1.8 }) => {
  const groupRef = useRef();

  // Generate random zigzag lines
  const generateArc = () => {
    const points = [];
    let pos = new THREE.Vector3(
      (Math.random() - 0.5) * radius,
      (Math.random() - 0.5) * radius,
      (Math.random() - 0.5) * radius
    );
    points.push(pos.clone());
    const segments = 5 + Math.floor(Math.random() * 5);
    for (let i = 0; i < segments; i++) {
      pos = pos.clone().add(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4
        )
      );
      points.push(pos.clone());
    }
    return points;
  };

  const lines = Array.from({ length: count }).map(() => ({
    points: generateArc(),
    speed: 0.01 + Math.random() * 0.02,
  }));

  useFrame(() => {
    groupRef.current.children.forEach((line, i) => {
      line.material.opacity =
        0.5 + 0.5 * Math.sin(Date.now() * 0.002 + i);
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" setFromPoints={line.points} />
          <lineBasicMaterial
            attach="material"
            color="#db2777"
            transparent
            opacity={0.7}
            linewidth={2}
          />
        </line>
      ))}
    </group>
  );
};

export default ElectricArcs; // ✅ default export
