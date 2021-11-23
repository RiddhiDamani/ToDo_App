import React from "react";
import { Image } from "react-bootstrap";

const RightSide = () => {
  return (
    <div>
      <Image
        src="./img/bg.jpg"
        thumbnail
        style={{ width: "80%", height: "80%", border: "none" }}
      />
    </div>
  );
};

export default RightSide;
