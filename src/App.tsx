import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { MfeLoader } from "./lib/mfe-loader";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Profile = React.lazy(() => import("profile/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MfeLoader component={Dashboard} />} />
          
          <Route path="/profile" element={<MfeLoader component={Profile} />} />
          
          <Route path="/settings" element={<h1>Settings Page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;