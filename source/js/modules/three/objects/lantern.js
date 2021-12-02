import * as THREE from 'three';
import {setMaterial} from '../story.js';

class Lantern extends THREE.Group {
  constructor() {
    super();

    this.color = 0x0062c3;

    this.cylinder = new THREE.CylinderBufferGeometry(16, 16, 120, 30);
    this.cylinderMesh = new THREE.Mesh(this.cylinder, setMaterial({color: this.color}));

    this.sphere = new THREE.SphereGeometry(16, 30, 30);
    this.sphereMesh = new THREE.Mesh(this.sphere, setMaterial({color: this.color, flatShading: true}));

    this.centerCylinder = new THREE.CylinderBufferGeometry(7, 7, 230, 30);
    this.centerCylinderMesh = new THREE.Mesh(this.centerCylinder, setMaterial({color: this.color, flatShading: true}));

    this.box = new THREE.BoxBufferGeometry(37, 4, 37);
    this.boxMesh = new THREE.Mesh(this.box, setMaterial({color: this.color, flatShading: true}));

    this.trapezoid = new THREE.CylinderBufferGeometry(Math.hypot(42, 42) / 2, Math.hypot(34, 34) / 2, 60, 4);
    this.trapezoidMesh = new THREE.Mesh(this.trapezoid, setMaterial({color: 0xabcdef, flatShading: true}));

    this.topTrapezoid = new THREE.CylinderBufferGeometry(Math.hypot(45, 45) / 2, Math.hypot(57, 57) / 2, 6, 4);
    this.trapezoidTopMesh = new THREE.Mesh(this.topTrapezoid, setMaterial({color: this.color, flatShading: true}));

    this.constructChildren();
  }

  constructChildren() {
    this.addBaseCylinder();
    this.addSphere();
    this.addCentreCylinder();
    this.addBox();
    this.addTrapezoid();
    this.addTrapezoidTop();
  }

  addBaseCylinder() {
    this.add(this.cylinderMesh);
  }

  addSphere() {
    const topOffset = this.cylinderMesh.position.y + this.cylinderMesh.geometry.parameters.height / 2;
    this.sphereMesh.position.set(0, topOffset, 0);
    this.add(this.sphereMesh);
  }

  addCentreCylinder() {
    const topOffset = this.cylinderMesh.position.y + this.cylinderMesh.geometry.parameters.height / 2 + this.centerCylinder.parameters.height / 2;
    this.centerCylinderMesh.position.set(0, topOffset, 0);
    this.add(this.centerCylinderMesh);
  }

  addBox() {
    const topOffset = this.centerCylinderMesh.position.y + this.centerCylinderMesh.geometry.parameters.height / 2;
    this.boxMesh.position.set(0, topOffset, 0);
    this.add(this.boxMesh);
  }

  addTrapezoid() {
    const topOffset = this.boxMesh.position.y + this.trapezoid.parameters.height / 2;
    this.trapezoidMesh.position.set(0, topOffset, 0);
    this.trapezoidMesh.rotation.copy(new THREE.Euler(0, 45 * THREE.Math.DEG2RAD, 0, `XYZ`));
    this.add(this.trapezoidMesh);
  }

  addTrapezoidTop() {
    const topOffset = this.trapezoidMesh.position.y + this.trapezoidMesh.geometry.parameters.height / 2;
    this.trapezoidTopMesh.position.set(0, topOffset, 0);
    this.trapezoidTopMesh.rotation.copy(new THREE.Euler(0, 45 * THREE.Math.DEG2RAD, 0, `XYZ`));
    this.add(this.trapezoidTopMesh);
  }
}

export default Lantern;
