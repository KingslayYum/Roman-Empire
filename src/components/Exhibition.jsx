import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, ScrollControls, useScroll, useGLTF, OrbitControls } from '@react-three/drei'

// 🏛️ 3D Hallway Model Component
const Hallway = () => {
  const { scene } = useGLTF('/models/hallway.glb') // Put hallway.glb in /public/models
  return <primitive object={scene} scale={1} />
}

// 🎥 Camera Rig that moves on scroll
const CameraRig = () => {
  const camRef = useRef()
  const scroll = useScroll()

  useFrame(() => {
    const t = scroll.offset // value from 0 to 1 as you scroll
    const z = t * 50 // camera moves forward
    const x = Math.sin(t * Math.PI * 2) * 2 // camera subtly sways side to side
    camRef.current.position.set(x, 2, z)
    camRef.current.lookAt(0, 2, z + 5)
  })

  return <PerspectiveCamera makeDefault ref={camRef} fov={60} position={[0, 2, 0]} />
}

// 🖼️ Main Exhibition Section
const Exhibition = () => {
  return (
    <div className="w-full h-screen">
      <Canvas shadows>
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.2}>
            <CameraRig />
            <Hallway />
          </ScrollControls>
        </Suspense>
        {/* Optionally add controls for development */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}

export default Exhibition
