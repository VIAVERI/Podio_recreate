import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
// const EmployeeNetwork = lazy(() => import('./pages/EmployeeNetwork'));
// const DemoWorkspace = lazy(() => import('./pages/DemoWorkspace'));
// const Intranet = lazy(() => import('./pages/Intranet'));
// const ProjectManagement = lazy(() => import('./pages/ProjectManagement'));
// const SalesManagement = lazy(() => import('./pages/SalesManagement'));
// const Chat = lazy(() => import('./pages/Chat'));
// const CreateWorkspace = lazy(() => import('./pages/CreateWorkspace'));
// const ManageWorkspaces = lazy(() => import('./pages/ManageWorkspaces'));
// const SearchResults = lazy(() => import('./pages/SearchResults'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/employee-network" element={<EmployeeNetwork />} />
            <Route path="/demo-workspace" element={<DemoWorkspace />} />
            <Route path="/intranet" element={<Intranet />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/sales-management" element={<SalesManagement />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/create-workspace" element={<CreateWorkspace />} />
            <Route path="/manage-workspaces" element={<ManageWorkspaces />} />
            <Route path="/search" element={<SearchResults />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
