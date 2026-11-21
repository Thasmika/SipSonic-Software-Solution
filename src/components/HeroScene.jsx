import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei'

const CYAN = new THREE.Color('#00C2FF')
const INDIGO = new THREE.Color('#5B3BF5')

// Glossy cyan -> indigo gradient with a moving light sweep (matches the SVG logo)
function useGradientMaterial() {
  return useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          c1: { value: new THREE.Color('#00D2FF') },
          c2: { value: new THREE.Color("#6236F5") },
        },
        vertexShader: /* glsl */ `
          varying vec3 vPos; varying vec3 vN; varying vec3 vView;
          void main() {
            vPos = position;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vN = normalize(normalMatrix * normal);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: /* glsl */ `
          uniform float uTime; uniform vec3 c1; uniform vec3 c2;
          varying vec3 vPos; varying vec3 vN; varying vec3 vView;
          void main() {
            // diagonal gradient: top-left cyan -> bottom-right indigo (same as the SVG)
            float t = clamp((vPos.x - vPos.y) / 3.4 + 0.5, 0.0, 1.0);
            vec3 col = mix(c1, c2, smoothstep(0.05, 0.95, t));
            vec3 L1 = normalize(vec3(-0.5, 0.8, 1.0));
            vec3 L2 = normalize(vec3(0.8, -0.4, 0.6));
            float diff = 0.62 + 0.38 * max(dot(vN, L1), 0.0);
            float spec = pow(max(dot(reflect(-L1, vN), vView), 0.0), 40.0) * 0.9
                       + pow(max(dot(reflect(-L2, vN), vView), 0.0), 18.0) * 0.25;
            float fres = pow(1.0 - max(dot(vN, vView), 0.0), 3.0);
            // light sweep that travels across the logo every few seconds
            float sweepPos = mod(uTime * 0.9, 6.0) - 3.0;
            float sweep = smoothstep(0.35, 0.0, abs(vPos.x + vPos.y * 0.6 - sweepPos)) * 0.45;
            vec3 c = col * diff + vec3(spec) + fres * vec3(0.75, 0.95, 1.0) * 0.6 + sweep;
            gl_FragColor = vec4(c, 1.0);
          }`,
      }),
    []
  )
}

// Build a flat 2D outline of a stroked cubic path (the "knowledge wave")
function waveShape(s, half) {
  const V = (x, y) => new THREE.Vector2(x * s, y * s)
  const path = new THREE.CurvePath()
  path.add(new THREE.CubicBezierCurve(V(-34, 0), V(-22, 28), V(-10, 28), V(0, 0)))
  path.add(new THREE.CubicBezierCurve(V(0, 0), V(10, -28), V(22, -28), V(34, 0)))
  const N = 160
  const left = []
  const right = []
  for (let i = 0; i <= N; i++) {
    const u = i / N
    const p = path.getPointAt(u)
    const tg = path.getTangentAt(u)
    const n = new THREE.Vector2(-tg.y, tg.x).multiplyScalar(half)
    left.push(p.clone().add(n))
    right.push(p.clone().sub(n))
  }
  const shape = new THREE.Shape()
  shape.moveTo(left[0].x, left[0].y)
  left.forEach((p) => shape.lineTo(p.x, p.y))
  // round cap at the end
  const end = path.getPointAt(1)
  const ta = path.getTangentAt(1)
  const a0 = Math.atan2(ta.x, -ta.y)
  shape.absarc(end.x, end.y, half, a0, a0 - Math.PI, true)
  for (let i = right.length - 1; i >= 0; i--) shape.lineTo(right[i].x, right[i].y)
  const start = path.getPointAt(0)
  const tb = path.getTangentAt(0)
  const b0 = Math.atan2(-tb.x, tb.y)
  shape.absarc(start.x, start.y, half, b0, b0 - Math.PI, true)
  return shape
}

// The SipSonic logo rebuilt as a glossy extruded 3D badge
function Logo3D() {
  const group = useRef()
  const mat = useGradientMaterial()
  const s = 1.6 / 50 // SVG ring radius 50 -> 1.6 world units

  const { ring, wave } = useMemo(() => {
    const extrude = {
      depth: 0.16,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.05,
      bevelSegments: 8,
      curveSegments: 96,
    }
    const ringShape = new THREE.Shape()
    ringShape.absarc(0, 0, 54 * s - 0.05, 0, Math.PI * 2, false)
    const hole = new THREE.Path()
    hole.absarc(0, 0, 46 * s + 0.05, 0, Math.PI * 2, true)
    ringShape.holes.push(hole)
    const ring = new THREE.ExtrudeGeometry(ringShape, extrude)
    ring.translate(0, 0, -0.08)
    const wave = new THREE.ExtrudeGeometry(waveShape(s, 4.5 * s - 0.05), { ...extrude, curveSegments: 24 })
    wave.translate(0, 0, -0.08)
    return { ring, wave }
  }, [s])

  const dot = useMemo(() => {
    const g = new THREE.SphereGeometry(7 * s, 48, 48)
    g.scale(1, 1, 0.75)
    return g
  }, [s])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    mat.uniforms.uTime.value = t
    if (!group.current) return
    const { x, y } = state.pointer
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t * 0.5) * 0.4 + x * 0.45, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t * 0.4) * 0.1 - y * 0.3, 0.05)
  })

  return (
    <group ref={group}>
      {/* frosted glass disc behind the logo */}
      <mesh position={[0, 0, -0.22]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.95, 1.95, 0.08, 96]} />
        <meshPhysicalMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.45} roughness={0.2} clearcoat={1} transparent opacity={0.7} />
      </mesh>
      <mesh geometry={ring} material={mat} />
      <mesh geometry={wave} material={mat} />
      <mesh geometry={dot} position={[-34 * s, 0, 0.1]}>
        <meshPhysicalMaterial color="#0096D6" emissive="#00B8F5" emissiveIntensity={0.55} roughness={0.3} clearcoat={0.6} clearcoatRoughness={0.1} />
      </mesh>
      <mesh geometry={dot} position={[34 * s, 0, 0.1]}>
        <meshPhysicalMaterial color="#5B3BF5" emissive="#5B3BF5" emissiveIntensity={0.7} roughness={0.3} clearcoat={0.6} clearcoatRoughness={0.1} />
      </mesh>
      <SonicPulses />
      <Orbiters />
    </group>
  )
}

// Expanding "sonic" rings that pulse out from the logo
function SonicPulses() {
  const refs = useRef([])
  useFrame((state) => {
    const t = state.clock.elapsedTime
    refs.current.forEach((m, i) => {
      if (!m) return
      const p = (t * 0.35 + i / 3) % 1
      const sc = 1 + p * 1.1
      m.scale.set(sc, sc, sc)
      m.material.opacity = (1 - p) * 0.6
    })
  })
  return [0, 1, 2].map((i) => (
    <mesh key={i} ref={(el) => (refs.current[i] = el)}>
      <torusGeometry args={[1.6, 0.016, 8, 160]} />
      <meshBasicMaterial color={i % 2 ? INDIGO : CYAN} transparent opacity={0.4} depthWrite={false} />
    </mesh>
  ))
}

// Small glowing data nodes orbiting the logo
function Orbiters() {
  const ref = useRef()
  const nodes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        r: 2.05 + (i % 3) * 0.28,
        speed: 0.25 + (i % 5) * 0.07,
        phase: (i / 14) * Math.PI * 2,
        tilt: ((i % 4) - 1.5) * 0.45,
        size: 0.035 + (i % 3) * 0.015,
        color: i % 2 ? INDIGO : CYAN,
      })),
    []
  )
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current?.children.forEach((m, i) => {
      const n = nodes[i]
      const a = n.phase + t * n.speed
      m.position.set(Math.cos(a) * n.r, Math.sin(a) * n.r * Math.cos(n.tilt), Math.sin(a) * n.r * Math.sin(n.tilt))
    })
  })
  return (
    <group ref={ref}>
      {nodes.map((n, i) => (
        <mesh key={i}>
          <sphereGeometry args={[n.size, 12, 12]} />
          <meshBasicMaterial color={n.color} />
        </mesh>
      ))}
    </group>
  )
}

function Blob({ position, color, scale, speed }) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.25} metalness={0.4} distort={0.45} speed={2} transparent opacity={0.85} />
      </mesh>
    </Float>
  )
}

function Rig({ children }) {
  const { viewport } = useThree()
  const scale = Math.min(1, viewport.width / 6.2)
  return <group scale={scale}>{children}</group>
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[-3, 4, 5]} intensity={2.2} />
      <pointLight position={[4, 4, 5]} intensity={30} color="#00C2FF" />
      <pointLight position={[-4, -3, 4]} intensity={30} color="#5B3BF5" />
      <Rig>
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.7}>
          <Logo3D />
        </Float>
        <Blob position={[2.6, 1.7, -1.5]} color="#5B3BF5" scale={0.42} speed={2.2} />
        <Blob position={[-2.7, -1.6, -1]} color="#00C2FF" scale={0.32} speed={2.8} />
        <Blob position={[-2.3, 1.9, -2.4]} color="#8B6CFF" scale={0.26} speed={1.8} />
      </Rig>
      <Sparkles count={140} scale={[10, 7, 4]} size={2.6} speed={0.4} color="#00A8E0" opacity={0.8} />
      <Sparkles count={70} scale={[10, 7, 4]} size={3.2} speed={0.3} color="#5B3BF5" opacity={0.7} />
    </Canvas>
  )
}
