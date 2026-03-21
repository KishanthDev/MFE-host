import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

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
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;