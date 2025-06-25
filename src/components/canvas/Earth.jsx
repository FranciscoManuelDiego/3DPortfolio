import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF} from "@react-three/drei"
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ presrveDrawingBuffer: true}}
    camera={{ 
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-5, 3, 6]
    }}
    style={{ pointerEvents: "auto" }} // Restrict interaction to the canvas area
    >
      <Suspense fallback={<CanvasLoader/>}> 
        <OrbitControls
        autoRotate={true}
        enableZoom={false}
        enablePan= {false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        
        <Earth/>
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas