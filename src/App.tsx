import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { MfeLoader } from "./lib/mfe-loader";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Profile = React.lazy(() => import("profile/Profile"));

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MfeLoader component={Dashboard} />} />
          
          <Route path="/profile" element={<MfeLoader component={Profile} />} />
          
          <Route path="/settings" element={<h1>Settings Page</h1>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;