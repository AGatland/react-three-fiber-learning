import { Gltf } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

function Room() {

  return (
    <RigidBody name='floor' type="fixed" colliders="trimesh">
        <Gltf castShadow receiveShadow scale={0.02} position={[0, 1.7, 0]} src='/low_poly_living_room/scene.gltf' />
    </RigidBody>
  );
}

export default Room;
