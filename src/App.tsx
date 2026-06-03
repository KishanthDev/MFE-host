import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import { MfeLoader } from "./lib/mfe-loader";
import AuthPage from "./components/AuthPage";
import { Navigate } from "react-router-dom";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Profile = React.lazy(() => import("profile/Profile"));



function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = !!localStorage.getItem("userCredentials");

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* No SidebarLayout */}
        <Route path="/auth" element={<AuthPage />} />

        {/* With SidebarLayout */}
        <Route
          path="*"
          element={
            <SidebarLayout>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <MfeLoader component={Dashboard} />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <MfeLoader component={Profile} />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <div className="p-4 bg-white rounded-lg shadow">
                        Settings Page (Protected)
                      </div>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </SidebarLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;