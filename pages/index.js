// import styles from '../styles/Home.module.css'

import Head from "next/head";
import Login from "./components/Login";
import { useMoralis } from "react-moralis";
import Header from "./components/Header";
import Messages from "./Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll overflow-hidden bg-gradient-to-b from-black to-fuchsia-700">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />
        {/* Message */}
        <Messages />
      </div>
    </div>
  );
}
