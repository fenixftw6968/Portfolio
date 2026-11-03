import { useRef, useMemo, useState, useEffect } from 'react'
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

const STATIC_PARTICLE_POSITIONS = generateStaticParticlePositions(180)

function PolyhedronSculpture({ scrollOffset, mousePos }: CoreMeshProps) {
  const outerGroup = useRef<THREE.Group>(null)
  const icosahedronRef = useRef<THREE.Mesh>(null)
  const octahedronRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const torusRef2 = useRef<THREE.Mesh>(null)
  const wireframeOuter = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => STATIC_PARTICLE_POSITIONS, [])

  useFrame((state, delta) => {
    // Heightened mouse sensitivity for an alive, movable sculpture
    const targetX = mousePos.x * 0.9
    const targetY = mousePos.y * 0.9

    // Time-based organic floating motion
    const t = state.clock.getElapsedTime()

    if (outerGroup.current) {
      outerGroup.current.rotation.y += delta * 0.45
      outerGroup.current.position.y = Math.sin(t * 1.5) * 0.15
      outerGroup.current.position.x = THREE.MathUtils.lerp(
        outerGroup.current.position.x,
        mousePos.x * 0.4,
        0.08
      )
      
      outerGroup.current.rotation.x = THREE.MathUtils.lerp(
        outerGroup.current.rotation.x,
        targetY + scrollOffset * 2.2,
        0.08
      )
      outerGroup.current.rotation.z = THREE.MathUtils.lerp(
        outerGroup.current.rotation.z,
        targetX + scrollOffset * 1.2,
        0.08
      )

      const dynamicScale = Math.max(0.85, 1.28 - scrollOffset * 0.35)
      outerGroup.current.scale.setScalar(
        THREE.MathUtils.lerp(outerGroup.current.scale.x, dynamicScale, 0.1)
      )
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x += delta * 0.6
      icosahedronRef.current.rotation.y += delta * 0.45
    }
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y -= delta * 0.75
      octahedronRef.current.rotation.z += delta * 0.35
    }
    if (torusRef.current) {
      torusRef.current.rotation.x -= delta * 0.4
      torusRef.current.rotation.z -= delta * 0.5
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.y += delta * 0.45
      torusRef2.current.rotation.x += delta * 0.3
    }
    if (wireframeOuter.current) {
      wireframeOuter.current.rotation.y -= delta * 0.25
      wireframeOuter.current.rotation.x += delta * 0.25
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <group ref={outerGroup}>
      {/* Outer Forest Green Wireframe Icosahedron */}
      <mesh ref={wireframeOuter}>
        <icosahedronGeometry args={[2.15, 1]} />
        <meshBasicMaterial
          wireframe
          color="#08482D"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbiting Tech Ring 1 (Soft Mint) */}
      <mesh ref={torusRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.65, 0.022, 16, 100]} />
        <meshStandardMaterial
          color="#DAE7C7"
          emissive="#DAE7C7"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Orbiting Tech Ring 2 (Emerald Forest) */}
      <mesh ref={torusRef2} rotation={[-Math.PI / 3, Math.PI / 5, 0]}>
        <torusGeometry args={[2.95, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#08482D"
          emissive="#0d5e3c"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Primary Metallic Core */}
      <mesh ref={octahedronRef}>
        <octahedronGeometry args={[1.35, 0]} />
        <meshStandardMaterial
          color="#08482D"
          metalness={0.85}
          roughness={0.12}
        />
      </mesh>

      {/* Inner Dense Wireframe Lattice */}
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[1.38, 2]} />
        <meshStandardMaterial
          wireframe
          color="#DAE7C7"
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Swarming Studio Stardust Nodes */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#08482D"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Core Node Glass-Mint Sphere */}
      <mesh>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshStandardMaterial
          color="#DAE7C7"
          emissive="#08482D"
          emissiveIntensity={0.7}
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

  // Global window pointer listener so the 3D sculpture tracks anywhere the mouse moves
  useEffect(() => {
    const handleGlobalPointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleGlobalPointerMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleGlobalPointerMove)
  }, [])

  return (
    <div
      className={`relative w-full h-full min-h-[440px] lg:min-h-[580px] pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.3} />
        <directionalLight position={[10, 10, 8]} intensity={2.4} color="#ffffff" />
        <directionalLight position={[-10, -5, -4]} intensity={1.4} color="#DAE7C7" />
        <pointLight position={[0, 0, 0]} intensity={2.8} color="#08482D" distance={6} />

        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.7}>
          <PolyhedronSculpture
            scrollOffset={scrollOffset}
            mousePos={mousePos}
          />
        </Float>
      </Canvas>
    </div>
  )
}
