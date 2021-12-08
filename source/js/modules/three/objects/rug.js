import * as THREE from 'three';
import {colors} from '../../colorsAndReflection.js';
import rugShaderMaterial from '../materials/rugShaderMaterial.js';
import {getLathePointsForCircle, getLatheDegrees} from '../latheGeometry.js';

class Rug extends THREE.Group {
  constructor(isDark) {
    super();

    this.isDark = isDark;

    this.baseMesh = 0;

    this.startDeg = 16;
    this.finishDeg = 74;

    this.colorBase = this.isDark ? colors.ShadowedLightPurple : colors.LightPurple;
    this.colorStripe = this.isDark ? colors.ShadowedAdditionalPurple : colors.AdditionalPurple;

    this.rugMesh = 0;

    this.constructChildren();
  }

  constructChildren() {
    this.addRug();
  }

  addRug() {
    const points = getLathePointsForCircle(180, 3, 763);
    const {start, length} = getLatheDegrees(this.startDeg, this.finishDeg);

    const base = new THREE.LatheBufferGeometry(points, 50, start, length);
    const material = new THREE.ShaderMaterial(rugShaderMaterial({
      baseColor: {value: new THREE.Color(this.colorBase)},
      stripeColor: {value: new THREE.Color(this.colorStripe)}
    }));
    this.rugMesh = new THREE.Mesh(base, material);

    this.add(this.rugMesh);
  }
}

export default Rug;
