import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(2, 2, 5);
    scene.add(camera);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const bakedTexture = textureLoader.load(
      "https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/baked.jpg"
    );
    bakedTexture.flipY = false;
    bakedTexture.colorSpace = THREE.SRGBColorSpace;

    // Load Model with Textures
    const loader = new GLTFLoader();
    loader.load(
      "https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/model.glb",
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
              map: bakedTexture,
            });
          }
        });
        scene.add(gltf.scene);
        setLoading(false); // Hide loading message once model is ready
      },
      (xhr) => {
        console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`); // Optional: Log progress
      },
      (error) => {
        console.error("Error loading model:", error);
        setLoading(false); // Hide loading even if it fails
      }
    );

    // Animation Loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
      bakedTexture.dispose();
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      {loading && (
        <div className="absolute text-white text-lg font-bold">Loading...</div>
      )}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default Model;
