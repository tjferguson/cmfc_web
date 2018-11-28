import React from "react";
import Picture from "./Picture";
import Message from "./Message";
import warning from "./warning.svg";

const Preview = ({
  id,
  sponsor,
  sponsored,
  sponsorPicture,
  sponsoredPicture,
  messages,
  previewClick,
  conversationShown
}) => {
  const lastMessage = messages[messages.length - 1];
  const showConversation = conversationShown === id;
  const moderationNeeded = messages.some(message => message.moderationNeeded);
  return (
    <div
      className={`Preview ${
        conversationShown !== -1 && !showConversation
          ? "BackgroundConversation"
          : ""
      }`}
      onClick={() => {
        previewClick(id);
      }}
    >
      <Picture photo={sponsorPicture} phone={sponsor}/>
      <div
        className={`MessageContainer ${showConversation ? "Conversation" : ""}`}
      >
        {showConversation ? (
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
      {moderationNeeded && (
        <img
          src={warning}
          alt="moderation needed"
          className={`Warning ${showConversation ? " WarningHidden" : ""}`}
        />
      )}
      <Picture photo={sponsoredPicture} phone={sponsored}/>
    </div>
  );
};

export default Preview;
