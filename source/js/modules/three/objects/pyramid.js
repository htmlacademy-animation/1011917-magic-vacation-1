/* eslint-disable no-shadow */
import * as THREE from 'three';
import {setMaterial} from '../story.js';
import {colors, reflectivity} from '../../colorsAndReflection.js';
import {isShadow} from '../../helpers/isShadow.js';


class Pyramid extends THREE.Group {
  constructor(isShadow) {
    super();

    this.color = 0x0062c3;

    this.isShadow = isShadow;

    this.cone = new THREE.ConeBufferGeometry(Math.hypot(250, 250) / 2, 280, 4);
    this.mesh = new THREE.Mesh(this.cone, setMaterial({color: colors.Blue, ...reflectivity.soft, flatShading: true}));

    this.constructChildren();
  }

  constructChildren() {
    this.addPyramid();

    isShadow(this);
  }

  addPyramid() {
    this.add(this.mesh);
  }
}

export default Pyramid;
