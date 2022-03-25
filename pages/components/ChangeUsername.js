import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { user, isUserUpdating, userError, setUserData } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter your Username. current:${user.getUsername()}`
    );
    if (!username) return;
    setUserData({
      username: username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5 text-pink-200 bg-fuchsia-500 p-3 rounded-3xl hover:opacity-80">
      <button onClick={setUsername} disabled={isUserUpdating}>
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
