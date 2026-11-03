import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

interface ThreeDSceneProps {
  scrollOffset?: number
}

function CinematicSculpture({ scrollOffset = 0, isDark }: { scrollOffset?: number; isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const outerRingRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)

  // Floating ambient particle cloud
  const particleCount = 280
  const particles = useMemo(() => {
    const coords = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.8 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      coords[i] = radius * Math.sin(phi) * Math.cos(theta)
      coords[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      coords[i + 2] = radius * Math.cos(phi)
    }
    return coords
  }, [])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    const mouseX = state.pointer.x * 0.8
    const mouseY = state.pointer.y * 0.8

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY * 0.4 + scrollOffset * 1.5, 0.05)
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, mouseX * 0.4, 0.05)
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.12
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.35
      coreRef.current.rotation.y += delta * 0.4
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.3
      outerRingRef.current.rotation.x += delta * 0.15
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.y -= delta * 0.45
      innerRingRef.current.rotation.z -= delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Dynamic Ambient Point Lights */}
      <pointLight position={[10, 10, 10]} intensity={isDark ? 2.5 : 1.8} color="#34D399" />
      <pointLight position={[-10, -10, -10]} intensity={isDark ? 2 : 1.2} color="#059669" />
      <ambientLight intensity={isDark ? 0.6 : 0.8} />

      {/* Floating Organic Distortion Core (Active Theory hallmark) */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={coreRef} scale={1.4}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color={isDark ? '#08482D' : '#10B981'}
            attach="material"
            distort={0.42}
            speed={2.2}
            roughness={0.15}
            metalness={0.85}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Wireframe Holographic Core Cage */}
      <mesh scale={1.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={isDark ? '#34D399' : '#08482D'}
          wireframe
          transparent
          opacity={isDark ? 0.35 : 0.25}
        />
      </mesh>

      {/* Outer Gyro Rings */}
      <mesh ref={outerRingRef} scale={2.4}>
        <torusGeometry args={[1, 0.012, 16, 100]} />
        <meshBasicMaterial color={isDark ? '#6EE7B7' : '#08482D'} transparent opacity={0.65} />
      </mesh>

      <mesh ref={innerRingRef} scale={2.1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshBasicMaterial color={isDark ? '#A7F3D0' : '#059669'} transparent opacity={0.5} />
      </mesh>

      {/* Surrounding Ambient Stardust */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color={isDark ? '#6EE7B7' : '#08482D'}
          transparent
          opacity={isDark ? 0.55 : 0.4}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export function ThreeDScene({ scrollOffset = 0 }: ThreeDSceneProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <CinematicSculpture scrollOffset={scrollOffset} isDark={isDark} />
      </Canvas>
    </div>
  )
}

