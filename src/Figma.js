import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Figma(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Figma.gltf')
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (
    group.current.rotation.z += (delta/6),
    group.current.rotation.x = 1.8
    
    ))

  return (
    <group 
    ref={group} 
    {...props} 
    dispose={null} 
    scale={clicked ? 60 : 50}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    >
      <mesh castShadow receiveShadow geometry={nodes.Blue.geometry} material={materials['SVGBlue']} />
      <mesh castShadow receiveShadow geometry={nodes.Green.geometry} material={materials['SVGGreen']} />
      <mesh castShadow receiveShadow geometry={nodes.Orange.geometry} material={materials['SVGOrange']} />
      <mesh castShadow receiveShadow geometry={nodes.Red.geometry} material={materials['SVGRed']} />
      <mesh castShadow receiveShadow geometry={nodes.Purple.geometry} material={materials['SVGPurple']} />
    </group>
  )
}

useGLTF.preload('/Figma.gltf')