import * as THREE from 'three';

import Pyramid from '../objects/pyramid.js';
import Lantern from '../objects/lantern.js';

import SVGObject from '../svgObject.js';

class StoryScene1 extends THREE.Group {
  constructor() {
    super();

    this.constructChildren();
  }

  constructChildren() {
    this.addPyramid();
    this.addLantern();

    this.loadLeaf1();
    this.loadLeaf2();
  }

  addPyramid() {
    const pyramid = new Pyramid();

    pyramid.scale.set(0.35, 0.35, 0.35);
    pyramid.rotation.copy(new THREE.Euler(10 * THREE.Math.DEG2RAD, 0, 0, `XYZ`));
    pyramid.position.set(-8, -60, 15);

    this.add(pyramid);
  }

  addLantern() {
    const lantern = new Lantern();

    lantern.scale.set(0.42, 0.42, 0.42);
    lantern.rotation.copy(new THREE.Euler(10 * THREE.Math.DEG2RAD, 20 * THREE.Math.DEG2RAD, 0, `XYZ`));
    lantern.position.set(150, -115, 15);

    this.add(lantern);
  }

  async loadLeaf1() {
    const leaf = await new SVGObject(`leaf1-storyScene1`).getObject();
    const scale = 0.9;
    leaf.position.set(-105, 6, 10);
    leaf.scale.set(scale, -scale, scale);
    leaf.rotation.copy(new THREE.Euler(0, 10 * THREE.Math.DEG2RAD, -1 * THREE.Math.DEG2RAD), `XYZ`);
    this.add(leaf);
  }

  async loadLeaf2() {
    const leaf = await new SVGObject(`leaf2-storyScene1`).getObject();
    const scale = 0.7;
    leaf.position.set(-120, -85, 10);
    leaf.scale.set(scale, -scale, scale);
    leaf.rotation.copy(new THREE.Euler(0, 10 * THREE.Math.DEG2RAD, 45 * THREE.Math.DEG2RAD), `XYZ`);
    this.add(leaf);
  }
}

export default StoryScene1;
