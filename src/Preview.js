import React from "react";
import Picture from "./Picture";
import Message from "./Message";

const Preview = ({
  id,
  sponsored,
  sponsorPicture,
  sponsoredPicture,
  messages,
  previewClick,
  conversationShown
}) => {
  const lastMessage = messages[messages.length - 1];
  return (
    <div
      className="Preview"
      onClick={() => {
        previewClick(id);
      }}
    >
      <Picture photo={sponsorPicture} />
      <div className="MessageContainer">
        {conversationShown === id ? (
          messages.map((message, index) => {
            return (
              <Message
                key={index}
                right={message.from === sponsored}
                message={message}
              />
            );
          })
        ) : (
          <Message
            right={lastMessage.from === sponsored}
            message={lastMessage}
          />
        )}
      </div>
      <Picture photo={sponsoredPicture} />
    </div>
  );
};

export default Preview;
