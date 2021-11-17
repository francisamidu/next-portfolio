import "../styles/globals.css";
import "../styles/dashboard.css";
import "../styles/signup.css";
import "../styles/spinner.css";

import { DataContextProvider } from "../contexts/DataContext";
import { AuthContextProvider } from "../contexts/AuthContext";

import { Provider } from "react-redux";
import store from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
