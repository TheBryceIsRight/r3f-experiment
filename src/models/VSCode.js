import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function VSCode(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/VSCode.gltf')

  const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)
  useFrame((state, delta) => (
    // group.current.rotation.z += (delta / 6),
    group.current.rotation.x = Math.PI / 2
  ))

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      // scale={clicked ? 50 : 30}
      scale={30}
      // onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={[0.6, -0.7, 0]}
    >
      <mesh castShadow receiveShadow geometry={nodes.Top.geometry} material={materials['Blue']} >
        <meshStandardMaterial color={hovered ? "#003D65" : '#0065A9'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Bottom.geometry} material={materials['Blue']} >
        <meshStandardMaterial color={hovered ? "#003D65" : '#0065A9'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Arc.geometry} material={materials['LighterBlue']} >
        <meshStandardMaterial color={hovered ? "#00497A" : '#007ACC'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Anchor.geometry} material={materials['LightestBlue']} >
        <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/VSCode.gltf')