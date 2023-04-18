import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Postman(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Postman.gltf')

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (
        // group.current.rotation.z += (delta / 6),
        group.current.rotation.x = Math.PI / 2
    ))

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            // scale={clicked ? 60 : 40}
            // onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
            position={[0.6, -1, 0]}
        >
            <mesh castShadow receiveShadow geometry={nodes.Circle.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>

            <mesh castShadow receiveShadow geometry={nodes.Jetpack2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Stomach.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#00497A" : '#007ACC'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Stomach2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Booster.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Booster2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Helmet.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Helmet2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Helmet3.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Helmet4.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Visor.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Arm3.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Arm2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Arm.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Legs.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.FootBooster.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.FootBooster2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Triangle.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Triangle2.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Triangle3.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Triangle4.geometry} material={materials['Orange']} >
                <meshStandardMaterial color={hovered ? "#994121" : '#FF6C37'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.WhiteLeg.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#135E90" : '#1F9CF0'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Jetpack.geometry} material={materials['White']} >
                <meshStandardMaterial color={hovered ? "#003D65" : '#0065A9'} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/Postman.gltf')