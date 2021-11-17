import React, { useEffect, useState } from "react";
import router from "next/router";

import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";

import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { auth } = useAuth();

  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if (!auth.isAuthenticated && !accessToken && !refreshToken) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  });
  return (
    <main
      className={
        theme === "light"
          ? "dashboard grid min-h-screen relative"
          : "dashboard grid min-h-screen relative dark"
      }
    >
      {isLoading && <Loading theme={theme} />}
      <Sidebar setTheme={setTheme} theme={theme} />
    </main>
  );
};

export default Dashboard;
