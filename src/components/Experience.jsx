import { OrbitControls } from "@react-three/drei";
import Background from "./Background";
import { Plane } from "./Plane";

export const Experience = () => {
  return (
    <>
      <Background present="sunset" />
      <OrbitControls />
      <Plane />
    </>
  );
};
