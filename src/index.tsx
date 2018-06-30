import "./globalStyles";

import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root") as HTMLElement;

render(<App />, rootElement);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
