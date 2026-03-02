import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { CorruptionEngine } from "./Engines/CorruptionEngine/CorruptionEngine.js";
import { RealityWrapper } from "./components/RealityWrapper/RealityWrapper.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RealityWrapper>
        <CorruptionEngine />
        <App />
      </RealityWrapper>
    </Provider>
  </React.StrictMode>,
);
