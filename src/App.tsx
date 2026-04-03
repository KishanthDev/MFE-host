import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Profile = React.lazy(() => import("profile/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading remote...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<div>Loading remote...</div>}>
                <Profile />
              </Suspense>
            }
          />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;