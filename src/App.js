import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Figma from "./Figma";
import VSCode from "./VSCode";
import Text from './Text';
import Ground from './Ground';
import Label from './Label';
import { EffectComposer, Bloom } from '@react-three/postprocessing'


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'blue' : 'darkblue'} />
    </mesh>
  )
}

export default function App() {
  const [hovered, hover] = useState(false)
  const mouse = useRef([0, 0])

  return (
    <Canvas>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 10, 20]} angle={0.2} penumbra={1} />
      {/* <pointLight position={[-0, -0, -10]} /> */}
      <Text />
      <Figma />
      <VSCode />
      <Label text="Design" x={-2.4} y={-1.3}/>
      <Label text="Develop" x={0.5} y={-1.3}/>
      <Ground mirror={1} blur={[12000, 1200]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-1.7} scale={20} />
      <EffectComposer multisampling={8}>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.3} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0} intensity={0.2} />
      </EffectComposer>
      {/* <Environment preset="night" background blur={0.6} /> */}
      <OrbitControls />
    </Canvas>
  )
}
