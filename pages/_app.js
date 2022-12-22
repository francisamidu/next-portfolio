"use strict";
exports.__esModule = true;
require("../styles/globals.scss");
var ProjectsContext_1 = require("../contexts/ProjectsContext");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<ProjectsContext_1.ProjectContextProvider>
      <Component {...pageProps}/>
    </ProjectsContext_1.ProjectContextProvider>);
}
exports["default"] = MyApp;
