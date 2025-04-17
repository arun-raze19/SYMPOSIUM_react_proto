import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './FuturisticBackground.css';

// Generate random particles in a 3D space with velocity for movement
function generateParticles(count, radius) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  // Add velocities for movement
  const velocities = new Array(count).fill().map(() => ({
    x: (Math.random() - 0.5) * 0.01,
    y: (Math.random() - 0.5) * 0.01,
    z: (Math.random() - 0.5) * 0.01
  }));

  // Premium color palette
  const color1 = new THREE.Color('#3E7B27'); // Primary green
  const color2 = new THREE.Color('#85A947'); // Secondary green
  const color3 = new THREE.Color('#EFE3C2'); // Accent cream
  const color4 = new THREE.Color('#4CAF50'); // Bright green
  const color5 = new THREE.Color('#8BC34A'); // Light green

  const colorOptions = [color1, color2, color3, color4, color5];
  const colorWeights = [0.3, 0.3, 0.2, 0.1, 0.1]; // Weight distribution for colors

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // Create a sphere of particles with some clustering for premium effect
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    // Add some clustering by using different distribution patterns
    let r;
    if (Math.random() > 0.7) {
      // Create some clusters
      r = radius * (0.2 + 0.3 * Math.random());
    } else {
      // Regular distribution
      r = radius * Math.cbrt(Math.random()); // Cube root for more uniform distribution
    }

    positions[i3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);

    // Weighted random color selection for more controlled palette
    let colorIndex = 0;
    const rand = Math.random();
    let cumulativeWeight = 0;

    for (let j = 0; j < colorWeights.length; j++) {
      cumulativeWeight += colorWeights[j];
      if (rand < cumulativeWeight) {
        colorIndex = j;
        break;
      }
    }

    const randomColor = colorOptions[colorIndex];
    colors[i3] = randomColor.r;
    colors[i3 + 1] = randomColor.g;
    colors[i3 + 2] = randomColor.b;

    // Variable size with some larger particles for premium effect
    sizes[i] = Math.random() > 0.9 ? Math.random() * 3 + 1.5 : Math.random() * 1.5 + 0.5;
  }

  return { positions, colors, sizes, velocities };
}

// Particle field component
function ParticleField() {
  const pointsRef = useRef();
  const { size, camera } = useThree();

  // Reduced particle count for smoother performance
  const particleCount = useMemo(() => {
    if (size.width < 480) return 80;
    if (size.width < 768) return 120;
    return 180;
  }, [size.width]);

  // Generate particles with velocities
  const { positions, colors, sizes, velocities } = useMemo(() => {
    return generateParticles(particleCount, 20);
  }, [particleCount]);

  // Create refs for positions and rotation
  const positionsArray = useRef(positions);
  const rotationSpeed = useRef(delta => delta * 0.001);

  // Premium animation with particle movement
  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Gentle rotation for base effect
      pointsRef.current.rotation.y += rotationSpeed.current(delta);

      // Move individual particles for premium effect
      const positions = pointsRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Apply velocity with bounds checking
        positions[i3] += velocities[i].x;
        positions[i3 + 1] += velocities[i].y;
        positions[i3 + 2] += velocities[i].z;

        // Boundary check with smooth wrapping
        const distance = Math.sqrt(
          positions[i3] * positions[i3] +
          positions[i3 + 1] * positions[i3 + 1] +
          positions[i3 + 2] * positions[i3 + 2]
        );

        if (distance > 25) {
          // Reset position to opposite side with some randomness
          const factor = 0.8 + Math.random() * 0.2;
          positions[i3] *= -factor * 0.2;
          positions[i3 + 1] *= -factor * 0.2;
          positions[i3 + 2] *= -factor * 0.2;

          // Slightly change velocity for variety
          velocities[i].x = (Math.random() - 0.5) * 0.01;
          velocities[i].y = (Math.random() - 0.5) * 0.01;
          velocities[i].z = (Math.random() - 0.5) * 0.01;
        }
      }

      // Update the geometry
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Adjust camera on resize
  useEffect(() => {
    camera.position.z = 20;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera]);

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      colors={colors}
      sizes={sizes}
    >
      <PointMaterial
        vertexColors
        transparent
        size={2.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
        alphaMap={useMemo(() => {
          // Create a circular particle texture for premium look
          const canvas = document.createElement('canvas');
          canvas.width = 64;
          canvas.height = 64;
          const context = canvas.getContext('2d');

          // Create radial gradient for soft particles
          const gradient = context.createRadialGradient(
            32, 32, 0, 32, 32, 32
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
          gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          context.fillStyle = gradient;
          context.fillRect(0, 0, 64, 64);

          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;
          return texture;
        }, [])}
      />
    </Points>
  );
}

// Enhanced Grid component with premium effects
function Grid() {
  const gridRef = useRef();
  const gridRef2 = useRef();
  const gridMaterialRef = useRef();

  // Premium animation with pulse effect
  useFrame((state) => {
    if (gridRef.current && gridRef2.current && gridMaterialRef.current) {
      const time = state.clock.getElapsedTime();

      // Smooth wave movement
      gridRef.current.position.z = Math.sin(time * 0.02) * 0.3;

      // Counter-movement for second grid
      gridRef2.current.position.z = Math.sin(time * 0.02 + Math.PI) * 0.2;

      // Subtle opacity pulse for premium effect
      gridMaterialRef.current.opacity = 0.2 + Math.sin(time * 0.1) * 0.05;
    }
  });

  return (
    <group>
      {/* Main horizontal grid */}
      <mesh ref={gridRef} rotation={[Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
        <planeGeometry args={[70, 70, 12, 12]} />
        <meshBasicMaterial
          ref={gridMaterialRef}
          color="#85A947"
          wireframe={true}
          transparent={true}
          opacity={0.25}
        />
      </mesh>

      {/* Secondary grid for premium layered effect */}
      <mesh ref={gridRef2} rotation={[Math.PI / 2, Math.PI / 4, 0]} position={[0, -12, 0]}>
        <planeGeometry args={[80, 80, 8, 8]} />
        <meshBasicMaterial
          color="#3E7B27"
          wireframe={true}
          transparent={true}
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

// Premium light effect component
function PremiumLightEffect() {
  const lightRef = useRef();

  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.getElapsedTime();

      // Gentle movement for the light
      lightRef.current.position.x = Math.sin(time * 0.1) * 10;
      lightRef.current.position.z = Math.cos(time * 0.1) * 10;
    }
  });

  return (
    <group>
      <pointLight
        ref={lightRef}
        position={[10, 10, 10]}
        intensity={0.8}
        distance={50}
        decay={2}
        color="#85A947"
      />
      <ambientLight intensity={0.4} color="#123524" />
    </group>
  );
}

// Main background component
function FuturisticBackground() {
  return (
    <div className="futuristic-background">
      <Canvas dpr={0.7} camera={{ position: [0, 0, 20], fov: 60 }} gl={{ antialias: true, alpha: true, depth: true, stencil: false }}>
        <color attach="background" args={['#123524']} />
        <fog attach="fog" args={['#123524', 20, 50]} />
        <PremiumLightEffect />
        <ParticleField />
        <Grid />
      </Canvas>
    </div>
  );
}

export default FuturisticBackground;
