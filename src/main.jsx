import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import AuthProvbider from "./Providers/AuthProvbider";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
      <AuthProvbider>
        <RouterProvider router={router} />
      </AuthProvbider>
    </StrictMode>
  </div>
);
