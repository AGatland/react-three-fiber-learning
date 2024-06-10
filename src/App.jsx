/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Experience } from "./components/Experience";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function App() {

  return (
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 100, rotation: false }}>
        <color attach="background" args={["#ececec"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
  );
}

export default App;
