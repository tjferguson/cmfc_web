import React from "react";

const Message = ({ right, message }) => {
  return (
    <div className={`Message ${right ? "rightUser" : "leftUser"}`}>
      {message.message}
    </div>
  );
};

export default Message;
