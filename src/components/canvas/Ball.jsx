import { Suspense } from "react"
import { useState, useEffect } from 'react';
import { Canvas, useThree} from "@react-three/fiber"
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from "@react-three/drei"
import CanvasLoader from "../Loader"

// Using ThreeJS and Fiber to create the 3d ball
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]) //Using a texture to load elements

// Using a hook to resize the 3D Balls
  const { viewport } = useThree();
  const [scale, setScale] = useState(2.85);

  useEffect(() => {
    // You can adjust this logic based on your specific requirements
    const calculateScale = () => {
      // For example, you might want to reduce the scale for smaller screens
      const newScale = viewport.width < 500 ? 2.5 : 2.85;
      setScale(newScale);
    };

    // Initial calculation
    calculateScale();

    // Update scale when the window is resized
    const handleResize = () => {
      calculateScale();
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [viewport.width]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={0}>
      <ambientLight intensity={0.35}/>
      <directionalLight position={[0, 0, 0.3]}/>
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1, 2]}/>
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
        {/* <OrbitControls enableZoom={false} /> */}
        <Ball imgUrl={icon}></Ball>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default BallCanvas