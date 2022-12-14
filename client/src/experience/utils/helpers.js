import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Experience from '../experience';

export default class Helpers {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setHelpers();
    // this.setOrbitControls();
  }

  setHelpers() {
    this.gridHelper = new THREE.GridHelper(200, 20);
    this.axesHelper = new THREE.AxesHelper(100);
    // this.cameraHelper = new THREE.CameraHelper(this.camera.perspectiveCamera);
    // this.scene.add(this.gridHelper);
    // this.scene.add(this.axesHelper);
    // this.scene.add(this.cameraHelper);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.camera.orthographicCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
  }

  resize() { }

  update() {
    if (this.controls) {
      this.controls.update();
    }
  }
}
