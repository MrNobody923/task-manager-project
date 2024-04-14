import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AppLayout from "./pages/app/layout.tsx";
import AuthLayout from "./pages/auth/layout.tsx";
import { Login } from "./pages/auth/Login/login.tsx";
import { Create } from "./pages/auth/Signup/create.tsx";
import ForgotPassword from "./pages/auth/ForgoPassword/forgotpassword.tsx";
import Dashboard from "./pages/app/dashboard/dashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          <Route path="dashboard/" element={<Dashboard />} />
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/auth/"
          element={
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          }
        >
          <Route path="login/" element={<Login />} />
          <Route path="create/" element={<Create />} />
          <Route path="ForgotPassword/" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
