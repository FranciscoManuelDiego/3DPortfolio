import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from "@react-three/drei"
import CanvasLoader from "../Loader"

// Using ThreeJS and Fiber to create the 3d ball
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]) //Using a texture to load elements
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.35}/>
      <directionalLight position={[0, 0, 0.3]}/>
      <mesh castShadow receiveShadow scale={2.85}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial
        color= "#f5f2ed"
        polygonOffset
        polygonOffsetFactor={-1}
        />
        <Decal
        position={[0, 0, 1]}
        rotation={[0, 0, -6.35]}
        flatShading
        map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback= {<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}></Ball>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default BallCanvas