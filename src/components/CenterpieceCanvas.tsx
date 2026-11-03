import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface CoreMeshProps {
  scrollOffset: number
  mousePos: { x: number; y: number }
}

function generateStaticParticlePositions(count: number) {
  const pos = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const seed1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453
    const r1 = seed1 - Math.floor(seed1)
    const seed2 = Math.sin((i + 1) * 39.346 + 11.135) * 43758.5453
    const r2 = seed2 - Math.floor(seed2)
    const seed3 = Math.sin((i + 2) * 73.156 + 54.512) * 43758.5453
    const r3 = seed3 - Math.floor(seed3)

    const radius = 2.4 + r1 * 2.6
    const theta = r2 * Math.PI * 2
    const phi = Math.acos(r3 * 2 - 1)
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    pos[i * 3 + 2] = radius * Math.cos(phi)
  }
  return pos
}

const STATIC_PARTICLE_POSITIONS = generateStaticParticlePositions(160)

function PolyhedronSculpture({ scrollOffset, mousePos }: CoreMeshProps) {
  const outerGroup = useRef<THREE.Group>(null)
  const icosahedronRef = useRef<THREE.Mesh>(null)
  const octahedronRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const torusRef2 = useRef<THREE.Mesh>(null)
  const wireframeOuter = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => STATIC_PARTICLE_POSITIONS, [])

  useFrame((_, delta) => {
    const targetX = mousePos.x * 0.5
    const targetY = mousePos.y * 0.5

    if (outerGroup.current) {
      outerGroup.current.rotation.y += delta * 0.3
      outerGroup.current.rotation.x = THREE.MathUtils.lerp(
        outerGroup.current.rotation.x,
        targetY + scrollOffset * 1.8,
        0.05
      )
      outerGroup.current.rotation.z = THREE.MathUtils.lerp(
        outerGroup.current.rotation.z,
        targetX + scrollOffset * 0.9,
        0.05
      )

      const dynamicScale = Math.max(0.85, 1.25 - scrollOffset * 0.35)
      outerGroup.current.scale.setScalar(
        THREE.MathUtils.lerp(outerGroup.current.scale.x, dynamicScale, 0.08)
      )
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x += delta * 0.45
      icosahedronRef.current.rotation.y += delta * 0.35
    }
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y -= delta * 0.7
      octahedronRef.current.rotation.z += delta * 0.25
    }
    if (torusRef.current) {
      torusRef.current.rotation.x -= delta * 0.3
      torusRef.current.rotation.z -= delta * 0.4
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.y += delta * 0.35
      torusRef2.current.rotation.x += delta * 0.2
    }
    if (wireframeOuter.current) {
      wireframeOuter.current.rotation.y -= delta * 0.2
      wireframeOuter.current.rotation.x += delta * 0.2
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={outerGroup}>
      {/* Outer Hologram Cyan Wireframe Icosahedron */}
      <mesh ref={wireframeOuter}>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial
          wireframe
          color="#38bdf8"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Tech Ring 1 (Electric Violet) */}
      <mesh ref={torusRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.6, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Tech Ring 2 (Neon Cyan) */}
      <mesh ref={torusRef2} rotation={[-Math.PI / 3, Math.PI / 5, 0]}>
        <torusGeometry args={[2.9, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Primary Deep Glass Metallic Core */}
      <mesh ref={octahedronRef}>
        <octahedronGeometry args={[1.35, 0]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>

      {/* Inner Dense Wireframe Lattice (Neon Purple) */}
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[1.37, 2]} />
        <meshStandardMaterial
          wireframe
          color="#c084fc"
          roughness={0.2}
          metalness={0.8}
          emissive="#a855f7"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Swarming Stardust Nodes / Particles (Dual Color vibe) */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#38bdf8"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Core Node Glow Sphere */}
      <mesh>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#818cf8"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

interface CenterpieceCanvasProps {
  className?: string
  scrollOffset?: number
}

export function CenterpieceCanvas({ className = '', scrollOffset = 0 }: CenterpieceCanvasProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    setMousePos({ x, y })
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      className={`relative w-full h-full min-h-[440px] lg:min-h-[580px] pointer-events-auto ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 8]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-10, -5, -4]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[0, 0, 0]} intensity={3.0} color="#818cf8" distance={6} />

        <Float speed={2.0} rotationIntensity={0.4} floatIntensity={0.6}>
          <PolyhedronSculpture
            scrollOffset={scrollOffset}
            mousePos={mousePos}
          />
        </Float>
      </Canvas>
    </div>
  )
}
