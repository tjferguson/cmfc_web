import React from "react";
import warning from "./warning.svg";

const Message = ({ right, message }) => {
  const showDialog = () => {console.log("Show dialog")};
  return (
    <div
      className={`Message ${right ? "rightUser" : "leftUser"} ${
        message.moderationNeeded ? " ModerationNeeded" : ""
      }`}
    >
      {message.message}
      {message.moderationNeeded && (
        <div>
          <img
            src={warning}
            alt="moderation needed"
            className="WarningAction"
            onClick={showDialog}
          />
        </div>
      )}
      {

      }
    </div>
  );
};

export default Message;
