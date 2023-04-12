import { extend } from "@react-three/fiber"
import { FontLoader } from "./three/examples/jsm/loaders/FontLoader"
import { TextGeometry } from "./three/examples/jsm/geometries/TextGeometry"
import DM_Sans from "./three/examples/jsm/loaders/DM_Sans_Medium_Regular.json"

extend({TextGeometry})


export default function Label(props) {
    const font = new FontLoader().parse(DM_Sans)

    return (
        <mesh position={[props.x, props.y, 0.5]}>
            <textGeometry args={[props.text, {font, size: 0.4, height: 0.1}]}/>
            <meshPhysicalMaterial attach="material" color={'#FFF'} />
        </mesh>
    )
}

