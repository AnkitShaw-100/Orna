import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import type { Category, MetalColor, DiamondSize, Karat } from "@/lib/products";

interface Props {
  category: Category;
  metalColor: MetalColor;
  diamondSize: DiamondSize;
  karat: Karat;
}

const METAL_HEX: Record<MetalColor, string> = {
  "Yellow Gold": "#e8c46a",
  "Rose Gold":   "#e3a895",
  "Silver":      "#e6e8ec",
};

// Karat shifts warmth/saturation slightly
const karatTint = (hex: string, karat: Karat) => {
  const c = new THREE.Color(hex);
  if (karat === "22K") c.offsetHSL(0, 0.05, 0.04);
  if (karat === "14K") c.offsetHSL(0, -0.08, -0.03);
  return `#${c.getHexString()}`;
};

const gemScale = (s: DiamondSize) =>
  ({ "0.25 ct": 0.55, "0.50 ct": 0.8, "0.75 ct": 1.05, "1.00 ct": 1.3 }[s]);

function MetalMaterial({ color }: { color: string }) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={1}
      roughness={0.12}
      clearcoat={1}
      clearcoatRoughness={0.05}
      reflectivity={1}
    />
  );
}

function Diamond({ scale = 1, position = [0, 0, 0] as [number, number, number] }) {
  return (
    <mesh position={position} scale={scale} rotation={[Math.PI, 0, 0]} castShadow>
      <octahedronGeometry args={[0.35, 0]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0}
        roughness={0}
        transmission={1}
        thickness={1.2}
        ior={2.4}
        clearcoat={1}
        clearcoatRoughness={0}
        attenuationColor="#e8f4ff"
        attenuationDistance={1}
        specularIntensity={1}
      />
    </mesh>
  );
}

function Ring({ metal, gem }: { metal: string; gem: number }) {
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[1, 0.12, 64, 128]} />
        <MetalMaterial color={metal} />
      </mesh>
      {/* prongs */}
      <group position={[0, 1.05, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
          <MetalMaterial color={metal} />
        </mesh>
        <Diamond scale={gem} position={[0, 0.25, 0]} />
      </group>
    </group>
  );
}

function Necklace({ metal, gem }: { metal: string; gem: number }) {
  return (
    <group>
      <mesh rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[1.3, 0.04, 32, 200]} />
        <MetalMaterial color={metal} />
      </mesh>
      <group position={[0, -1.3, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 16]} />
          <MetalMaterial color={metal} />
        </mesh>
        <Diamond scale={gem * 1.2} position={[0, -0.25, 0]} />
      </group>
    </group>
  );
}

function Earring({ metal, gem }: { metal: string; gem: number }) {
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.6, 0]} castShadow>
        <torusGeometry args={[0.55, 0.06, 32, 96]} />
        <MetalMaterial color={metal} />
      </mesh>
      <mesh position={[0, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 16]} />
        <MetalMaterial color={metal} />
      </mesh>
      <Diamond scale={gem} position={[0, -0.55, 0]} />
    </group>
  );
}

function Bracelet({ metal, gem }: { metal: string; gem: number }) {
  const gems = [0, 1, 2, 3, 4, 5].map((i) => {
    const a = (i / 6) * Math.PI * 2;
    return [Math.cos(a) * 1.15, 0, Math.sin(a) * 1.15] as [number, number, number];
  });
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1.15, 0.18, 48, 128]} />
        <MetalMaterial color={metal} />
      </mesh>
      {gems.map((p, i) => (
        <Diamond key={i} scale={gem * 0.6} position={[p[0], 0.18, p[2]]} />
      ))}
    </group>
  );
}

function Piece({ category, metal, gem }: { category: Category; metal: string; gem: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.35;
  });

  return (
    <group ref={ref}>
      {category === "Rings" && <Ring metal={metal} gem={gem} />}
      {category === "Necklaces" && <Necklace metal={metal} gem={gem} />}
      {category === "Earrings" && <Earring metal={metal} gem={gem} />}
      {category === "Bracelets" && <Bracelet metal={metal} gem={gem} />}
    </group>
  );
}

export function JewelryViewer({ category, metalColor, diamondSize, karat }: Props) {
  const metal = karatTint(METAL_HEX[metalColor], karat);
  const gem = gemScale(diamondSize);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 4], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#f1ece2"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#ffd9a8" />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Piece category={category} metal={metal} gem={gem} />
        </Float>
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.45}
          scale={6}
          blur={2.5}
          far={2}
        />
        <Environment preset="studio" />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={2.5}
        maxDistance={6}
        autoRotate={false}
      />
    </Canvas>
  );
}
