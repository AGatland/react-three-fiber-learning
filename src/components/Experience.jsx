import { OrbitControls } from "@react-three/drei"
import Room from "./Room"
import { Character } from "./Character"

export const Experience = () => {

  return (
    <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        <OrbitControls />

        <Character />
        <Room />
    </>
  )
}