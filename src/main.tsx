import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize theme from localStorage or system preference
const initializeTheme = () => {
  const stored = localStorage.getItem("theme");
  const root = document.documentElement;
  
  if (stored === "dark") {
    root.classList.add("dark");
  } else if (stored === "light") {
    root.classList.remove("dark");
  } else {
    // Use system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
};

initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
