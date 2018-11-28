import React from "react";
import defaultUser from "./defaultUser.svg";

const Picture = ({ photo, phone }) => {
  return (
    <div className="Phone">
      <img src={photo || defaultUser} alt="user" className="Picture" />
      {phone}
    </div>
  );
};

export default Picture;
