import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DataPovider } from "./providers/DataProviders.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataPovider>
      <App />
    </DataPovider>
  </StrictMode>
);
