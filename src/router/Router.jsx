import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage";
import AdminPage from "pages/AdminPage";
import PageNotFound from "pages/PageNotFound";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
