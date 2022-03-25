import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      alt="useravater"
      className="bg-black rounded-full cursor-pointer hover:opacity-80 object-cover"
      layout="fill"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnPress && logout()}
    />
  );
}

export default Avatar;
