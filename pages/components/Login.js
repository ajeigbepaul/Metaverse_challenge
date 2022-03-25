import Image from "next/image";
import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative bg-black ">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          alt="logo"
          src="/logo.jpg"
          width={100}
          height={100}
          className="animate-spin rounded-full object-cover"
        />
        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg border-none bg-yellow-500 p-4 font-bold"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="h-screen w-full">
        <Image src="/metaverse3.jpg" layout="fill" objectFit="contain" />
      </div>
      <h1>I am still here</h1>
    </div>
  );
}

export default Login;
