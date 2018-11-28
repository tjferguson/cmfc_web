import React from "react";
import warning from "./warning.svg";

const Message = ({ right, message }) => {
  return (
    <div
      className={`Message ${right ? "rightUser" : "leftUser"} ${
        message.moderationNeeded ? " ModerationNeeded" : ""
      }`}
    >
      {message.message}
      {message.moderationNeeded && (
        <img
          src={warning}
          alt="moderation needed"
          className={'Warning'} 
        />
      )}
    </div>
  );
};

export default Message;
