import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

interface ActiveTheoryCoreProps {
  mouse: React.MutableRefObject<{ x: number; y: number; targetX: number; targetY: number }>
  isMobile: boolean
  isDark: boolean
  scrollOffset?: number
}

function ActiveTheoryCore({ mouse, isMobile, isDark, scrollOffset = 0 }: ActiveTheoryCoreProps) {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  const midRingRef = useRef<THREE.Mesh>(null)
  const outerRingRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Floating particles count (optimized for mobile/desktop)
  const count = isMobile ? 1200 : 3800

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const colorA = new THREE.Color(isDark ? '#34D399' : '#08482D')
    const colorB = new THREE.Color(isDark ? '#059669' : '#10B981')
    const colorC = new THREE.Color(isDark ? '#6EE7B7' : '#DAE7C7')

    for (let i = 0; i < count; i++) {
      // Golden spiral sphere distribution for organic depth
      const radius = 2.5 + Math.random() * 8.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)

      // Random blend between palette tones
      const rand = Math.random()
      const chosenColor = rand > 0.6 ? colorA : rand > 0.3 ? colorB : colorC
      col[i * 3] = chosenColor.r
      col[i * 3 + 1] = chosenColor.g
      col[i * 3 + 2] = chosenColor.b
    }
    return [pos, col]
  }, [count, isDark])

  useFrame((state, delta) => {
    // Smooth lerp mouse tracking
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05

    const t = state.clock.getElapsedTime()
    const { x, y } = mouse.current

    // Subtle camera parallax response
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 0.7, 0.04)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 0.7 - scrollOffset * 2, 0.04)
    state.camera.lookAt(0, -scrollOffset * 0.5, 0)

    // Center sculpture rotation and float
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.6, 0.06)
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, x * 0.5, 0.06)
      groupRef.current.position.y = Math.sin(t * 1.3) * 0.15 - scrollOffset * 1.8
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.3
      sphereRef.current.rotation.y += delta * 0.38
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += delta * 0.4
      innerRingRef.current.rotation.y -= delta * 0.25
    }

    if (midRingRef.current) {
      midRingRef.current.rotation.x -= delta * 0.35
      midRingRef.current.rotation.z += delta * 0.2
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.y += delta * 0.18
      outerRingRef.current.rotation.x += delta * 0.12
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.04 + x * 0.15
      particlesRef.current.rotation.x = t * 0.02 - y * 0.15
    }
  })

  return (
    <>
      {/* Cinematic Lighting Rig */}
      <ambientLight intensity={isDark ? 0.8 : 1.2} />
      <directionalLight position={[6, 8, 5]} intensity={isDark ? 3.5 : 2.5} color="#34D399" />
      <directionalLight position={[-6, -5, -4]} intensity={isDark ? 2.5 : 1.5} color="#059669" />
      <pointLight position={[0, 0, 0]} intensity={isDark ? 4 : 2} color="#10B981" distance={8} />

      {/* Main 3D Interactive Group */}
      <group ref={groupRef}>
        {/* Central Distorted Metallic Icosahedron Core */}
        <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
          <mesh ref={sphereRef} scale={isMobile ? 1.2 : 1.65}>
            <icosahedronGeometry args={[1, 5]} />
            <MeshDistortMaterial
              color={isDark ? '#062B1B' : '#0B5336'}
              distort={0.45}
              speed={2.2}
              roughness={0.12}
              metalness={0.92}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </Float>

        {/* Holographic Wireframe Shell */}
        <mesh scale={isMobile ? 1.55 : 2.05}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial
            color={isDark ? '#34D399' : '#08482D'}
            wireframe
            transparent
            opacity={isDark ? 0.3 : 0.18}
          />
        </mesh>

        {/* Concentric Gyro Rings */}
        <mesh ref={innerRingRef} scale={isMobile ? 2.1 : 2.6} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1, 0.015, 16, 120]} />
          <meshBasicMaterial
            color={isDark ? '#6EE7B7' : '#059669'}
            transparent
            opacity={isDark ? 0.75 : 0.55}
          />
        </mesh>

        <mesh ref={midRingRef} scale={isMobile ? 2.5 : 3.1} rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <torusGeometry args={[1, 0.012, 16, 120]} />
          <meshBasicMaterial
            color={isDark ? '#34D399' : '#08482D'}
            transparent
            opacity={isDark ? 0.6 : 0.45}
          />
        </mesh>

        <mesh ref={outerRingRef} scale={isMobile ? 2.9 : 3.65} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[1, 0.01, 16, 120]} />
          <meshBasicMaterial
            color={isDark ? '#A7F3D0' : '#10B981'}
            transparent
            opacity={isDark ? 0.5 : 0.35}
          />
        </mesh>
      </group>

      {/* Thousands of Depth-Enhanced Ambient Stardust Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.04 : 0.055}
          vertexColors
          transparent
          opacity={isDark ? 0.75 : 0.55}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  )
}

export function Hero3DScene({ scrollOffset = 0 }: { scrollOffset?: number }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to +1
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1
        mouse.current.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ActiveTheoryCore
          mouse={mouse}
          isMobile={isMobile}
          isDark={isDark}
          scrollOffset={scrollOffset}
        />
      </Canvas>
    </div>
  )
}
