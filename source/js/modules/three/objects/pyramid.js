import * as THREE from 'three';
import {setMaterial} from '../story.js';
import {colors, reflectivity} from '../../colorsAndReflection.js';

class Pyramid extends THREE.Group {
  constructor() {
    super();

    this.color = 0x0062c3;

    this.cone = new THREE.ConeBufferGeometry(Math.hypot(250, 250) / 2, 280, 4);
    this.mesh = new THREE.Mesh(this.cone, setMaterial({color: colors.Blue, ...reflectivity.soft, flatShading: true}));

    this.constructChildren();
  }

  constructChildren() {
    this.addPyramid();
  }

  addPyramid() {
    this.add(this.mesh);
  }
}

export default Pyramid;
