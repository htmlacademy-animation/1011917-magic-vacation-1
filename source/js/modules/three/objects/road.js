import * as THREE from 'three';
import {colors} from '../../colorsAndReflection.js';
import roadShaderMaterial from '../materials/roadShaderMaterial.js';
import {getLathePointsForCircle, getLatheDegrees} from '../latheGeometry.js';

class Road extends THREE.Group {
  constructor() {
    super();

    this.colorBase = colors.Grey;
    this.colorStripe = colors.White;

    this.startDeg = 0;
    this.finishDeg = 90;

    this.constructChildren();
  }

  constructChildren() {
    this.addBase();
  }

  addBase() {
    const points = getLathePointsForCircle(165, 3, 737);
    const {start, length} = getLatheDegrees(this.startDeg, this.finishDeg);

    const base = new THREE.LatheBufferGeometry(points, 50, start, length);
    const material = new THREE.ShaderMaterial(roadShaderMaterial({
      baseColor: {value: new THREE.Color(this.colorBase)},
      stripeColor: {value: new THREE.Color(this.colorStripe)}
    }));
    const roadMesh = new THREE.Mesh(base, material);

    this.add(roadMesh);
  }
}

export default Road;
