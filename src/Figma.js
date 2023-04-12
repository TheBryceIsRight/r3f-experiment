import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Figma(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Figma.gltf')
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)


  useFrame((state, delta) => (
    group.current.rotation.z += (delta / 6),
    group.current.rotation.x = Math.PI / 2
  ))

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={clicked ? 60 : 40}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={[-2, -1, 0]}
    >
      <mesh castShadow receiveShadow geometry={nodes.Blue.geometry} material={materials['SVGBlue']}>
        <meshStandardMaterial color={hovered ? "#107198" : '#1ABCFE'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Green.geometry} material={materials['SVGGreen']} >
        <meshStandardMaterial color={hovered ? "#067C4F" : '#0ACF83'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Orange.geometry} material={materials['SVGOrange']} >
        <meshStandardMaterial color={hovered ? "#99443B" : '#FF7262'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Red.geometry} material={materials['SVGRed']} >
        <meshStandardMaterial color={hovered ? "#912F12" : '#F24E1E'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Purple.geometry} material={materials['SVGPurple']} >
        <meshStandardMaterial color={hovered ? "#613599" : '#A259FF'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Figma.gltf')