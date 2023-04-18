import { Reflector, useTexture } from '@react-three/drei'

export default function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections.jpg', '/SurfaceImperfections2.jpg'])
    return (
      <Reflector resolution={1024} args={[8, 8]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[3, 3]} {...props} />}
      </Reflector>
    )
  }