import { Html, useProgress } from "@react-three/drei"
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p className="text-xl text-LogoColor font-bold mt-30">
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default Loader