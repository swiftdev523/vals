"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MusicPlayer from "../src/components/MusicPlayer";
import Login from "../src/lib/Login";

export default function ClientApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("authenticated", "true");
    router.push("/question");
  };

  // If on home page and not authenticated, show login
  if (pathname === "/" && !isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show music player if authenticated
  return (
    <>
      {isAuthenticated && <MusicPlayer />}
      <Login onLogin={handleLogin} />
    </>
  );
}
