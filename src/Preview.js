import React from "react";
import Picture from "./Picture";
import Message from "./Message";

const Preview = ({ sponsored, sponsorPicture, sponsoredPicture, messages }) => {
  const lastMessage = messages[messages.length - 1];
  return (
    <div className="Preview">
      <Picture photo={sponsorPicture} />
      <Message right={lastMessage.from === sponsored} message={lastMessage} />
      <Picture photo={sponsoredPicture} />
    </div>
  );
};

export default Preview;
