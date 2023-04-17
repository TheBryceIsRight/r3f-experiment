import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Text from './Text';
import Ground from './Ground';
import Label from './Label';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'

const DESIGNMODELS = {
  Figma: "./Figma.gltf",
  Sketch: "./Sketch.gltf",
}

const DEVMODELS = {
  VSCode: "./VSCode.gltf",
  Postman: "./Postman.gltf",
}

function DesignModel({ url, ...props }) {
  const { scene } = useGLTF(url)
  // <primitive object={...} mounts an already existing object
  return <primitive object={scene} {...props} scale={25} />
}

function DevModel({ url, ...props }) {
  const { scene } = useGLTF(url)

  if (url === "./Postman.gltf") {
    return <primitive object={scene} {...props} scale={0.7} />
  } else {
    return <primitive object={scene} {...props} scale={25} />
  }
  // <primitive object={...} mounts an already existing object
}


export default function App() {

  const { Design } = useControls({ Design: { value: 'Figma', options: Object.keys(DESIGNMODELS) } });
  const { Development } = useControls({ Development: { value: 'Postman', options: Object.keys(DEVMODELS) } });

  return (
    <Canvas>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.1} />
      <spotLight position={[-10, 40, 30]} angle={0.08} penumbra={0.8} />
      {/* <pointLight position={[-0, -0, -10]} /> */}
      <Text />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <DevModel position={[1.4, 0.25, 0]} url={DEVMODELS[Development]} />
        <DesignModel position={[-1.4, 0.25, 0]} url={DESIGNMODELS[Design]} />
      <Label text="Design" x={-2.4} y={-1.3} />
      <Label text="Develop" x={0.5} y={-1.3} />
      <Ground mirror={1} blur={[12000, 1200]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-2} scale={20} />
      <EffectComposer multisampling={8}>
      </EffectComposer>
      <OrbitControls />
    </Canvas>
  )
}
