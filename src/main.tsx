import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./Form.tsx";
import Navbar from "./Navbar.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Form />
  </StrictMode>
);
