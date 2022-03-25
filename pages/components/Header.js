import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";
import { useMoralis } from "react-moralis";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 p-5 sticky top-0 z-50 border-0  border-b-pink-500 shadow-sm bg-black lg:w-12/12 lg:mx-auto">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
        <div className="h-[70px] w-[70px] mx-auto relative hidden lg:inline-grid">
          <Image
            alt="useravater1"
            src="/logo.jpg"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative w-40 h-40 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl ">Welcome to the COMMUNITY Metaverse</h1>
          <h2 className=" font-bold truncate text-5xl ">
            {user.getUsername()}
          </h2>
          {/* Change username */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
