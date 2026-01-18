import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <head>
      <title>Joe Vaughan Is Embracing The Future</title>
    </head>
    <App />
  </StrictMode>
);
