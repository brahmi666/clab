import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ArchComponent = () => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Set up renderer
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(30, 30, 30);
    scene.add(camera);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;

    // Load 3D model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      "assets/luiz_ieda_-_salao_cafe.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.1, 0.1, 0.1);
        scene.add(model);
        setLoading(false); // Hide loading message when model loads
      },
      (xhr) => {
        console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading GLTF model:", error);
        setLoading(false); // Hide loading even if it fails
      }
    );

    // Handle window resize
    const onResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", onResize);

    // Animation loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {loading && (
        <div className="absolute text-white text-lg font-bold">Loading...</div>
      )}
      <canvas ref={canvasRef} className="webgl" />
    </div>
  );
};

export default ArchComponent;
