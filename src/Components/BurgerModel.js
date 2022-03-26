import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";
import Models from "./Models";

softShadows()

const BurgerModel = () => {
    return (
        <Canvas
        // flat
        shadows
            camera={{ position: [70, 30, -40], fov: 45 }}
            style={{ height: "100vh", width: "100vw" }}
        // ref={ref}
        >
            {/* <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}> */}
            <ambientLight intensity={0.3} />
            <pointLight color={'yellow'} intensity={0.3} castShadow position={[-70,25,20]} />
            <pointLight color={'white'} castShadow
            position={[0,200, -100]}
                intensity={1} />
                {/* <directionalLight
        castShadow
        intensity={0.1}
        // shadow-mapSize-height={512}
        // shadow-mapSize-width={512}
      /> */}

            <Suspense fallback={null}>

                <Models />
            </Suspense>
      {/* </PresentationControls> */}
            <OrbitControls autoRotateSpeed={1} enableDamping={true} enableZoom={false} minAzimuthAngle={Math.PI/2} maxAzimuthAngle={Math.PI} minPolarAngle={0} maxPolarAngle={Math.PI/2}/>
        </Canvas>
    )
}

export default BurgerModel