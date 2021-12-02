import * as THREE from 'three';
import {setMaterial} from '../story.js';

class Snowman extends THREE.Group {
  constructor() {
    super();

    this.color = 0xffffff;

    this.bigCylinder = new THREE.SphereGeometry(75, 30, 30);
    this.sphereBigMesh = new THREE.Mesh(this.bigCylinder, setMaterial({color: this.color}));

    this.smallCylinder = new THREE.SphereGeometry(44, 30, 30);
    this.sphereSmallMesh = new THREE.Mesh(this.smallCylinder, setMaterial({color: this.color}));

    this.cone = new THREE.ConeBufferGeometry(Math.hypot(18, 18) / 2, 75, 30);
    this.coneMesh = new THREE.Mesh(this.cone, setMaterial({color: 0xFF4500}));

    this.constructChildren();
  }

  constructChildren() {
    this.addSphereBig();
    this.addSphereSmall();
    this.addCone();
  }

  addSphereBig() {
    this.add(this.sphereBigMesh);
  }

  addSphereSmall() {
    this.sphereSmallMesh.position.set(0, 108, 0);
    this.add(this.sphereSmallMesh);
  }

  addCone() {
    const leftOffset = this.sphereSmallMesh.geometry.parameters.radius + 32 - this.cone.parameters.height / 2;
    const topOffset = this.sphereSmallMesh.position.y;
    this.coneMesh.position.set(leftOffset, topOffset, 0);
    this.coneMesh.rotation.copy(new THREE.Euler(0, 0, -90 * THREE.Math.DEG2RAD, `XYZ`));
    this.add(this.coneMesh);
  }
}

export default Snowman;
