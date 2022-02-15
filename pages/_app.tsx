import { AppProps } from "next/dist/shared/lib/router/router";
import NavBar from "../components/NavBar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
