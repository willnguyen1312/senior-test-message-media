import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

render(<App />, document.getElementById("root") as HTMLElement);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
