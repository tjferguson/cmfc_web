import React from "react";
import defaultUser from "./defaultUser.svg";

const Picture = ({ photo }) => {
  return <img src={photo || defaultUser} alt="user" className="Picture" />;
};

export default Picture;
