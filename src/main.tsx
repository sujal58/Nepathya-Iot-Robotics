import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/Nepathya-Iot-Robotics/">
      <App />
      <Toaster />
    </Router>
  </StrictMode>
);
