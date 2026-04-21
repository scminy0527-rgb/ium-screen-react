import React from "react";
import ChatMessage from "../component/chatComponent/ChatMessage";

const ChatSample = () => {
  return (
    <div>
      <ul>
        <li>
          <ChatMessage></ChatMessage>
        </li>
        <li>
          <ChatMessage
            message="너무 좋아요"
            time="14:03"
            username="김지만"
          ></ChatMessage>
        </li>
        <li>
          <ChatMessage
            isMine={true}
            message="너무 좋아요"
            time="14:03"
            username="김지만"
          ></ChatMessage>
        </li>
      </ul>
    </div>
  );
};

export default ChatSample;
