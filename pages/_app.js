import "../styles/globals.css";
import "../styles/dashboard.css";
import "../styles/signup.css";
import { NewsContextProvider } from "../contexts/NewsContext";
import { DataContextProvider } from "../contexts/DataContext";

function MyApp({ Component, pageProps }) {
  return (
    <NewsContextProvider>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </NewsContextProvider>
  );
}

export default MyApp;
