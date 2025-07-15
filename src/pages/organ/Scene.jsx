import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html, Box, Plane } from "@react-three/drei"
import * as THREE from "three"

function responsive(){
    const[screen, setScreen] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
        height: typeof window !== "undefined" ? window.innerHeight : 800,
        isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
        isTablet: typeof window !== "undefined" ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    })

    useEffect(()=>{
        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            setScreen({
                width,
                height,
                isMobile: width < 768,
                isTablet: width >= 768 && width < 1024,
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return screen
};

function Information({path, instructions, position = [0,1,0], screen, scale}){
    const{ scene } = useGLTF(path);
    const modelRef = useRef();
    const [rotation, setRotation] = useState(true);
    const [information, setInformation] = useState(true);
    const [modelPosition, setmodelPosition] = useState(position);

    useEffect(() =>{
        const handleKeyPress = (event) => {
            if(event.key.toLowerCase() === "p"){
                setRotation((prev) => !prev)
            }
        }

        window.addEventListener("keypress", handleKeyPress);
        return() => window.removeEventListener("keypress", handleKeyPress);
    }, []);

    useFrame(() => {
        if(modelRef.current && rotation){
            modelRef.current.rotation.y += 0.005;
        }
    });

    useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
       })
     }
    }, [scene])

    const getModelScale = () => {
    if (screen.isMobile) return 3
    if (screen.isTablet) return 4
    return 5
  }

  return (
    <>
    <primitive
        ref={modelRef}
        object={scene}
        scale={scale ? scale : (path.includes("healthy-liver.glb") ? [0.7, 0.7, 0.7] : getModelScale())}
        position={modelPosition}
        onClick={() => setInformation(true)}
        onPointerMissed = {() => setInformation(false)}
    />

    {information && (
        <Html
            position={[modelPosition[0], modelPosition[1]+1, modelPosition[2]]}
            distanceFactor={screen.isMobile? 8:6}
            occlude
        >
        <div className={'liver-message ${screen.isMobile ? "liver-message-mobile" : ""}'}/>
        </Html>
    )}

    {information && !screen.isMobile && (
        <Html
            position={[-2, 2, 0]}
            className="html-3d-instructions"
            transform
            occlude
            distanceFactor={screen.isTablet ? 3 : 2}
        >
            <div className={'instructions-3d-container ${screen.isTablet ? "instructions-tablet": ""}'}>
                <h1 className="instructions-3d-title">Información</h1>
                <div className="instructions-3d-content">
                    <p>Utilice el mouse para ver el modelo</p>
                    <ul className="instructions-3d-list">
                        <li>* Mantenga el click para rotar el modelo</li>
                        <li>* Mueva la rueda del mouse para ajustar el zoom</li>
                        <li>* Mantenga el click derecho para mover la vista de escena</li>
                        <li>* Presione P para desactivar o activar la rotación</li>
                    </ul>
                </div>                
            </div>
        </Html>
    )}
    </>
  )
}

    function Scene(){
        const {scene} = useThree();

        useEffect(() => {
            scene.background = new THREE.Color("#b1a4a4ff")
            scene.fog = new THREE.Fog("#b1a4a4ff", 20, 30)
        }, [scene])

        return(
            <>
                <ambientLight intensity={0.5} />
                <rectAreaLight position={[0, 5, 0]} width={4} height={1} intensity={5} color="#e2cf9bff" />
                <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />

                <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                    <meshStandardMaterial color="#ceccccff" />
                </Plane>

                 <Plane args={[20, 10]} position={[0, 4, -5]} receiveShadow>
                    <meshStandardMaterial color="#424e58ff" />
                </Plane>
                <Plane args={[20, 10]} position={[-5, 4, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
                    <meshStandardMaterial color="#424e58ff" />
                </Plane>
                <Plane args={[20, 10]} position={[5, 4, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
                    <meshStandardMaterial color="#424e58ff" />
                </Plane>

                <group position={[0, 0, 0]}>
                <Box args={[3, 0.1, 2]} position={[0, 0, 0]} castShadow receiveShadow>
                    <meshStandardMaterial color="#e21e1eff" />
                </Box>
                <Box args={[0.1, 0.5, 0.1]} position={[1.4, -0.3, 0.9]} castShadow>
                    <meshStandardMaterial color="#888888" />
                </Box>
                <Box args={[0.1, 0.5, 0.1]} position={[-1.4, -0.3, 0.9]} castShadow>
                    <meshStandardMaterial color="#888888" />
                </Box>
                <Box args={[0.1, 0.5, 0.1]} position={[1.4, -0.3, -0.9]} castShadow>
                    <meshStandardMaterial color="#888888" />
                </Box>
                <Box args={[0.1, 0.5, 0.1]} position={[-1.4, -0.3, -0.9]} castShadow>
                    <meshStandardMaterial color="#888888" />
                </Box>
                </group>
            </>
        )
    }

    function CameraController({target}){

        const {camera} = useThree();

        useEffect(() => {
            camera.lookAt(new THREE.Vector3(...target));
        }, [camera, target])

        return null;
    }

    export default function SceneModel({
        modelPath = "/placeholder.svg?height=400&width=400",
        showInstructions =  false,
        scale
    }){
        const screen = responsive();
        const [modelPosition, setModelPosition] = useState([0,1,0])

        const getCanvasConfig = () => {
            if (screen.isMobile) {
                return {
                    width: "100%",
                    height: "45vh",
                    camera: { position: [0, 2, 10], fov: 35 },
                }
            }

            if (screen.isTablet) {
                return {
                    width: "100%",
                    height: "55vh",
                    camera: { position: [0, 2, 11], fov: 30 },
                    }
            }
                return {
                    width: "100%",
                    height: "65vh",
                    camera: { position: [0, 2, 12], fov: 25 },
            }
        }

        const canvasConfig = getCanvasConfig();

        return(
            <div className="liver-model-container">
                <Canvas
                    style={{
                        width: canvasConfig.width,
                        height: canvasConfig.height,
                        maxWidth: "100%",
                    }}
                    shadows
                    camera={canvasConfig.camera}
                >
                    <Scene/>
                    <OrbitControls
                        target={modelPosition}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={0}
                        enableDamping={true}
                        dampingFactor={0.05}
                    />
                     <CameraController target={modelPosition} />

                     <Information 
                        path={modelPath}
                        instructions={showInstructions}
                        position={modelPosition}
                        screen={screen}
                        scale={scale}
                     />
                </Canvas>
            </div>
        )
    }