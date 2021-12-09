import "../styles/globals.css";

import { ProjectContextProvider } from "../contexts/ProjectsContext";
function MyApp({ Component, pageProps }) {
  return (
    <ProjectContextProvider>
      <Component {...pageProps} />
    </ProjectContextProvider>
  );
}

export default MyApp;
