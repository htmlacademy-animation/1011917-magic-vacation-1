import * as THREE from 'three';

import Snowman from '../objects/snowman.js';
import Road from '../objects/road.js';

class StoryScene2 extends THREE.Group {
  constructor() {
    super();

    this.constructChildren();
  }

  constructChildren() {
    this.addSnowman();
    this.addRoad();
  }

  addSnowman() {
    const snowman = new Snowman();

    snowman.scale.set(0.95, 0.95, 0.95);
    snowman.rotation.copy(new THREE.Euler(15 * THREE.Math.DEG2RAD, -45 * THREE.Math.DEG2RAD, 0, `XYZ`));
    snowman.position.set(-125, -115, 0);

    this.add(snowman);
  }

  addRoad() {
    const road = new Road();
    const scale = 0.735;

    road.scale.set(scale, scale, scale);
    road.position.set(0, -100, 0);
    road.rotation.copy(new THREE.Euler(13.5 * THREE.Math.DEG2RAD, -45 * THREE.Math.DEG2RAD, 0), `XYZ`);
    this.add(road);
  }
}

export default StoryScene2;
