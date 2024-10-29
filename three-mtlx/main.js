import './style.css'
import * as THREE from 'three'
import fragment from'./gltf_pbr_carpaint_ps.glsl?raw'
import vertex from './gltf_pbr_carpaint_vs.glsl?raw'
// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// レンダラーの作成
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 立方体の作成
const geometry = new THREE.BoxGeometry();
const shaderMat = new THREE.ShaderMaterial({vertexShader: vertex, fragmentShader: fragment})
const cube = new THREE.Mesh(geometry,shaderMat);
let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5,3,5);// 光の向き
scene.add(dirLight);
scene.add(cube);

// アニメーションの設定
const animate = function () {
  requestAnimationFrame(animate);

  // オブジェクトの回転
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
