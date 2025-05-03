import { Suspense, useEffect, useState} from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, SpotLight, useGLTF, } from "@react-three/drei"

import CanvasLoader from '../Loader'
const Computers = (isMobile) => {
  const computer = useGLTF ('./desktop_pc/scene.gltf')  
//The useState is sent via props and it's rendered in the scale by an inline cond.
  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="black"/>
      <pointLight intensity={2} />
      <primitive object={computer.scene} 

  scale={isMobile ? [4, 4, 4] : [3.25, 3.25, 3.25]} // Adjust scale for all axes
  position={isMobile ? [-2, -2, 0] : [0, -3.25, 0]} // Adjust position for X, Y, Z
      />
    </mesh>
  )
  // Then you can adjust the position and size from here!
}
// This imports the model and the light effects into my hero section
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); 
  
  useEffect(() =>{
    const  mediaQuery =  window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change' , handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change' , 
      handleMediaQueryChange);
    }
  }, [])
  // Getting the resolution for the mobiel to modify the scale of the  obj.
  // Adding the event and then removing so it doesn't overcharge memory

  return (
    <Canvas
    className="w-full h-full"
    frameloop="demand"
    shadows
    camera = {{position: [20, 3, 5], fov: 30}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback= {<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        enableRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
// This imports my aspects into the model.
// Suspense allows to have a loader while accessing the page.
// Min and Max Polar allows to rotate specific angles
// Fallback CanvasLoader might not charge at the beginning , try to erase it to restart
// fallback= {<CanvasLoader />}
export default ComputersCanvas