import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Bravix } from "./screens/Bravix/Bravix";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Bravix />
  </StrictMode>,
);
