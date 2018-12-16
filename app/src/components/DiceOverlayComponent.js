import React, { PureComponent } from 'react';
import cn from 'classnames';
import * as CANNON from 'cannon';
import * as THREE from 'three';

import diceManager from 'threejs-dice-modern';
import CannonDebugRenderer from 'utils/CannonDebugRenderer';

export class DiceHandler {
  /**
   *
   */
  constructor() {
    this.manager = null;
    this.diceList = [];

    this.init();
  }
  /**
   *
   */
  init() {
    this.world = new CANNON.World();

    this.scene = new THREE.Scene();

    this.manager = diceManager;

    this.manager.setWorld(this.world);
  }
  /**
   *
   */
  update() {
    this.world.step(1/60);

    for (var i in this.diceList) {
      this.diceList[i].getObject().diceObject.updateMeshFromBody();
    }
  }
  /**
   *
   * @params {DiceObject} dice
   */
  addDice(dice) {
    this.diceList.push(dice);
    this.addToScene(dice.getObject());
  }
  /**
   *
   * @params {THREE.object} object
   */
  addToScene(object) {
    this.scene.add(object);
  }
  /**
   *
   */
  shakeDice() {
    const diceValues = this.diceList.map((die) => {
      const gameObject = die.getObject();
      gameObject.diceObject.updateMeshFromBody();

      gameObject.quaternion.x = (Math.random()*90-45) * Math.PI / 180;
      gameObject.quaternion.z = (Math.random()*90-45) * Math.PI / 180;
      die.updateBodyFromMesh();

      gameObject.body.angularVelocity.set(
        12 * Math.random() - 10,
        12 * Math.random() - 10,
        12 * Math.random() - 10
      );
      gameObject.body.velocity.set(
        5 * Math.round(Math.random()) * 2 - 1,
        5 * Math.round(Math.random()) * 2 - 1,
        1,
      );

      return ({dice: die, value: 5});
    });

    this.manager.prepareValues(diceValues);

    return diceValues;
  }
}

class DiceOverlayComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: '',
    /** @type {string} */
    className: '',
    /** @type {object} */
    style: {},
    /** @type {diceManager} */
    diceHandler: {},
  };
  /** @override */
  constructor(props) {
    super(props);

    this.mountRef = React.createRef();

    this.animate = this.animate.bind(this);
  }
  /** @override */
  render() {
    const { baseClassName, className, style } = this.props;

    return (
      <div
        className={cn('dice-overlay-component', baseClassName, className)}
        style={style}
        ref={this.mountRef}
      />
    )
  }
  /** @override */
  componentDidMount() {
    const { diceHandler } = this.props;
    this.world = diceHandler.world;

    const WIDTH = 200 || this.mountRef.current.clientWidth;
    const HEIGHT = 200 || this.mountRef.current.clientHeight;
    const floorZ = -4;

    // INITIALIZE
    // - RENDERER
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(WIDTH, HEIGHT);
    this.renderer.setClearColor(new THREE.Color(0x436499));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // - CAMERA
    this.camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 1000);
    this.camera.position.z = 5;

    // - LIGHT
    const light = new THREE.DirectionalLight('#6a6879', 1.5);
    light.castShadow = true;
    light.position.set(-5, 5, 10);
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera = new THREE.OrthographicCamera(-10, 10, -10, 10, 0.1, 100);

    const ambientLighting = new THREE.AmbientLight( 0x404040 ); // soft white light

    // - OBJECTS
    const floorMaterial = new THREE.MeshPhongMaterial({ color: new THREE.Color(0x436499), side: THREE.DoubleSide });
    const floorGeometry = new THREE.PlaneGeometry(15, 15, 1, 1);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.receiveShadow = true;
    floor.position.z = -4;

    // - PHYSICS
    this.world.gravity.set(0, 0, -11);
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.solver.iterations = 16;

    // -- floor collider
    const floorBody = new CANNON.Body({
      position: new CANNON.Vec3(0, 0, floorZ),
      shape: new CANNON.Plane(),
      material: diceManager.floorBodyMaterial,
    });
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 0), -Math.PI / 2);
    this.world.add(floorBody);

    // -- wall colliders
    const leftWall = new CANNON.Body({
      position: new CANNON.Vec3(-5, 0, floorZ),
      shape: new CANNON.Plane(),
      material: diceManager.floorBodyMaterial,
    });
    leftWall.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2);
    this.world.add(leftWall);

    const rightWall = new CANNON.Body({
      position: new CANNON.Vec3(5, 0, floorZ),
      shape: new CANNON.Plane(),
      material: diceManager.floorBodyMaterial,
    });
    rightWall.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2);
    this.world.add(rightWall);

    const topWall = new CANNON.Body({
      position: new CANNON.Vec3(0, 5, floorZ),
      shape: new CANNON.Plane(),
      material: diceManager.floorBodyMaterial,
    });
    topWall.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2);
    this.world.add(topWall);

    const bottomWall = new CANNON.Body({
      position: new CANNON.Vec3(0, -5, floorZ),
      shape: new CANNON.Plane(),
      material: diceManager.floorBodyMaterial,
    });
    bottomWall.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.world.add(bottomWall);

    // RENDER
    diceHandler.addToScene(this.camera);
    diceHandler.addToScene(ambientLighting);
    diceHandler.addToScene(light);
    diceHandler.addToScene(floor);

    // MOUNT
    this.mountRef.current.appendChild(this.renderer.domElement);

    // toggle this to show the Cannon.js collision layer
    if (false) this.cannonDebugRenderer = new CannonDebugRenderer(diceHandler.scene, diceHandler.world);

    // START
    diceHandler.shakeDice();
    this.start();
  }
  /** @override */
  componentWillUnmount(){
    this.stop()

    if (this.mount && this.renderer) {
      this.mount.removeChild(this.renderer.domElement);
    }
  }
  /**
   * starts updating the renderer
   */
  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }
  /**
   * stops updating the renderer
   */
  stop() {
    cancelAnimationFrame(this.frameId)
  }
  /**
   * update a single animation frame
   */
  animate() {
    const { diceHandler } = this.props;

    if (diceHandler) {
      diceHandler.update();
      this.renderer.render(diceHandler.scene, this.camera);
      this.frameId = requestAnimationFrame(this.animate);
    }

    if (this.cannonDebugRenderer) {
      this.cannonDebugRenderer.update();
    }
  }
}

export default DiceOverlayComponent;
/*
// dice
diceManager.setWorld(world);
let dice20 = new DiceD20({size: 0.8});
scene.add(dice20.getObject());

let dice = [dice20];

function randomThrow() {
  let diceValues = [];

  for (var i = 0; i < dice.length; i++) {

    // dice[i].getObject().position.x = -15 - (i % 3) * 1.5;
    // dice[i].getObject().position.y = 2 + Math.floor(i / 3) * 1.5;
    // dice[i].getObject().position.z = -15 + (i % 3) * 1.5;
    dice[i].getObject().quaternion.x = (Math.random()*90-45) * Math.PI / 180;
    dice[i].getObject().quaternion.z = (Math.random()*90-45) * Math.PI / 180;
    dice[i].updateBodyFromMesh();

    dice20.getObject().body.angularVelocity.set(
      12 * Math.random() - 10,
      12 * Math.random() - 10,
      12 * Math.random() - 10
    );
    dice20.getObject().body.velocity.set(
      3 * Math.round(Math.random()) * 2 - 1,
      3 * Math.round(Math.random()) * 2 - 1,
      2,
    );
    diceValues.push({dice: dice[i], value: i + 1});
  };

  diceManager.prepareValues(diceValues);
}
*/
