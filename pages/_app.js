import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APPID}
      serverUrl={process.env.NEXT_PUBLIC_SERVERURL}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
