import "../styles/globals.css";
import "../styles/dashboard.css";
import "../styles/signup.css";
import { NewsContextProvider } from "../contexts/NewsContext";
import { DataContextProvider } from "../contexts/DataContext";
import { AuthContextProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <NewsContextProvider>
        <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
      </NewsContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
