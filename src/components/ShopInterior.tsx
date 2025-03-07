import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ShopInterior = ({ onLoad }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const parent = canvas.parentElement;
    const sizes = {
      width: parent.clientWidth, // Match parent container width
      height: parent.clientHeight || 500, // Set default height
    };

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(5, 5, 10); // Adjust position for better framing
    scene.add(camera);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minDistance = 3;
    controls.maxDistance = 15; // Prevent zooming too far

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const loader = new GLTFLoader();
    loader.load(
      "assets/luiz_ieda_-_salao_cafe.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.08, 0.08, 0.08); // Adjust scale to fit the container
        model.position.set(0, -1, 0); // Center it properly
        scene.add(model);

        if (onLoad) {
          setTimeout(() => {
            onLoad();
          }, 500);
        }
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    const onResize = () => {
      sizes.width = parent.clientWidth;
      sizes.height = parent.clientHeight || 500;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", onResize);
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onLoad]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default ShopInterior;
