import "../styles/globals.css";
import { NewsContextProvider } from "../contexts/NewsContext";

function MyApp({ Component, pageProps }) {
  return (
    <NewsContextProvider>
      <Component {...pageProps} />
    </NewsContextProvider>
  );
}

export default MyApp;
