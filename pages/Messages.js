import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

//Only show messages from the last 15 minutes
const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);

  //RealTime Listener for the changes in the database
  const { data, error, isLoading } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-80">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="space-y-10 font-semibold">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>

      <div className="text-gray-400 text-center" ref={endOfMessageRef}>
        <p>You are up to date {user?.getUsername()}</p>
      </div>
    </div>
  );
}

export default Messages;
