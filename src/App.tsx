import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

function App() {
  console.log("App rendered");

  return (
    <div>
      <h1>HOST APP</h1>

      <Suspense fallback={<div>Loading remote...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;