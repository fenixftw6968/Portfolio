import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function MinimalMonochromeCore({
  mouse,
  isMobile,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>
  isMobile: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // 1. Subtle, sparse white ambient particles
  const count = isMobile ? 350 : 800
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = mouse.current

    // Subtle, slow rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15
      meshRef.current.rotation.y += delta * 0.18
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.4, 0.04)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.4, 0.04)
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.1
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.02 + x * 0.08
      particlesRef.current.rotation.x = t * 0.01 - y * 0.08
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 4]} intensity={1.5} color="#FFFFFF" />

      {/* Minimal Monochrome Wireframe Geometric Sculpture */}
      <group position={[isMobile ? 0 : 1.8, 0, 0]}>
        <mesh ref={meshRef} scale={isMobile ? 1.4 : 1.85}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#FFFFFF"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </group>

      {/* Quiet White Micro-Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#FFFFFF"
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>
    </>
  )
}

export function Hero3DScene() {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        gl={{ antialias: true, alpha: true }}
      >
        <MinimalMonochromeCore mouse={mouse} isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
