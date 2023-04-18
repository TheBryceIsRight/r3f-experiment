import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Label from './Label'

export default function Sketch(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Sketch.gltf')
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
            // scale={clicked ? 50 : 30}
            scale={30}
            // onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
            position={[-2.6, -0.7, 0]}
        >
            <mesh castShadow receiveShadow geometry={nodes.CenterBottom.geometry} material={materials['Yellow']}>
                <meshStandardMaterial color={hovered ? "#986800" : '#FDAD00'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.LeftBottom.geometry}>
                <meshStandardMaterial color={hovered ? "#8C4100" : '#EA6C00'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.RightBottom.geometry}>
                <meshStandardMaterial color={hovered ? "#8C4100" : '#EA6C00'} />
            </mesh>

            <mesh castShadow receiveShadow geometry={nodes.TopFurtherLeft.geometry}>
                <meshStandardMaterial color={hovered ? "#986800" : '#FDAD00'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.TopFurtherRight.geometry}>
                <meshStandardMaterial color={hovered ? "#986800" : '#FDAD00'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.TopLeft.geometry} material={materials['SVGBlue']}>
                <meshStandardMaterial color={hovered ? "#987E1D" : '#FDD231'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.TopRight.geometry} material={materials['SVGBlue']}>
                <meshStandardMaterial color={hovered ? "#987E1D" : '#FDD231'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Center.geometry} material={materials['BrightYellow']}>
                <meshStandardMaterial color={hovered ? "#988F6E" : '#FEEEB7'} />
            </mesh>
        </group>

    )
}

useGLTF.preload('/Sketch.gltf')