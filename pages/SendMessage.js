import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const handleMessageSent = (e) => {
    e.preventDefault();
    if (!message) return;
    //create an object that holds the messages.
    const Messages = Moralis.Object.extend("Messages");
    //call the new instance in messages
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex w-11/12 bg-black opacity-80 fixed bottom-0 p-3 rounded-full max-w-2xl shadow-xl ">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`please send your message ${user?.getUsername()}`}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
      />
      <button
        type="submit"
        onClick={handleMessageSent}
        className="text-pink-500 ml-4 font-bold"
      >
        send
      </button>
    </form>
  );
}

export default SendMessage;
