import { Gltf } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Euler } from 'three';

function Room() {

  return (
    <RigidBody name='floor' type="fixed" colliders="trimesh" rotation={new Euler(0, (Math.PI*3) / 4, 0, 'XYZ')}>
        <Gltf castShadow receiveShadow scale={0.02} position={[0, 1.7, 0]} src='/low_poly_living_room/scene.gltf' />
    </RigidBody>
  );
}

export default Room;
