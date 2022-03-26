import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import { Suspense } from "react";
import Models from "./Models";

softShadows()

const BurgerModel = () => {
    return (
        <Canvas
        shadows
            camera={{ position: [70, 30, -40], fov: 45 }}
            style={{ height: "100vh", width: "100vw" }}
        >
            <ambientLight intensity={0.3} />
            <pointLight color={'yellow'} intensity={0.3} castShadow position={[-70,25,20]} />
            <pointLight color={'white'} castShadow
            position={[0,200, -100]}
                intensity={1} />

            <Suspense fallback={null}>

                <Models />
            </Suspense>
            <OrbitControls enableDamping={true} enableZoom={false} minAzimuthAngle={Math.PI/2} maxAzimuthAngle={Math.PI} minPolarAngle={0} maxPolarAngle={Math.PI/2}/>
        </Canvas>
    )
}

export default BurgerModel