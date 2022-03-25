import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./components/Avatar";
import TimeAgo from "timeago-react";

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message?.get("ethAddress") === user?.get("ethAddress");
  return (
    <div
      className={`flex space-x-3 items-end relative mr-5 ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={user?.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message?.get("message")}</p>
      </div>
      {/* timeago */}
      <TimeAgo
        className={`text-pink-200 text-[10px] ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300" : "text-blue-400"
        }`}
      >
        {user?.get("username")}
      </p>
    </div>
  );
}

export default Message;
