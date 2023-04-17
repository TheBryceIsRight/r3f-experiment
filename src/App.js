import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Figma from "./Figma";
import VSCode from "./VSCode";
import Sketch from "./Sketch";
// import Postman from "./Postman";
import Text from './Text';
import Ground from './Ground';
import Label from './Label';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'
import { MathUtils } from 'three';



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
    return <primitive object={scene} {...props} scale={0.7}/>
  } else {
    return <primitive object={scene} {...props} scale={25} />
  }
  // <primitive object={...} mounts an already existing object
}


// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'blue' : 'darkblue'} />
//     </mesh>
//   )
// }

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
      {/* <Sketch />
      <VSCode /> */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <DevModel position={[1.4, 0.25, 0]} url={DEVMODELS[Development]} />
      <DesignModel position={[-1.4, 0.25, 0]} url={DESIGNMODELS[Design]} />
      <Label text="Design" x={-2.4} y={-1.3} />
      <Label text="Develop" x={0.5} y={-1.3} />
      <Ground mirror={1} blur={[12000, 1200]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-2} scale={20} />
      <EffectComposer multisampling={8}>
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.1} intensity={0.3} /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.1} intensity={0.2} /> */}
      </EffectComposer>
      <OrbitControls />
    </Canvas>
  )
}
