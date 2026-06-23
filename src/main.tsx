import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <head>
      <title>Joe Vaughan</title>
    </head>
    <App />
  </StrictMode>,
);
