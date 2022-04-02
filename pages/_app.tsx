import "../styles/globals.scss";

import { ProjectContextProvider } from "../contexts/ProjectsContext";
function MyApp({ Component, pageProps }) {
  return (
    <ProjectContextProvider>
      <Component {...pageProps} />
    </ProjectContextProvider>
  );
}

export default MyApp;
