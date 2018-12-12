import * as CANNON from 'cannon';
import * as THREE from 'three';
import { DiceManager, DiceD20 } from 'apis/diceApi';

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

// visual
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
renderer.setClearColor(new THREE.Color('rgb(151, 229, 255)'));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, SCREEN_WIDTH / SCREEN_HEIGHT, 0.1, 100);
camera.position.z = 5;
scene.add(camera);

const light = new THREE.DirectionalLight('#6a6879', 1.5);
light.castShadow = true;
light.position.set(0, 0, 15);
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera = new THREE.OrthographicCamera(-10, 10, -10, 10, 0.1, 100);
scene.add(light);

const floorMaterial = new THREE.MeshPhongMaterial({ color: '#00aa00', side: THREE.DoubleSide });
const floorGeometry = new THREE.PlaneGeometry(12, 12, 1, 1);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.receiveShadow = true;
floor.position.z = -4;
scene.add(floor);

// physics
const world = new CANNON.World();
world.gravity.set(0, 0, -11);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 16;

let floorBody = new CANNON.Body({
  position: new CANNON.Vec3(0, 0, -4),
  mass: 0,
  shape: new CANNON.Plane(),
  material: DiceManager.floorBodyMaterial,
});
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 0), -Math.PI / 2);
world.add(floorBody);

// dice
DiceManager.setWorld(world);
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

  DiceManager.prepareValues(diceValues);
}

function animate() {
  world.step(1/60);

  for (var i in dice) {
    dice[i].updateMeshFromBody();
  }

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
randomThrow();
