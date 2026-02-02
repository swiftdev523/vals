import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Forever from "./pages/Forever";
import Heart2Heart from "./pages/Heart2Heart";
import Flowers from "./pages/Flowers";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("authenticated", "true");
  };

  return (
    <Router>
      {isAuthenticated && <MusicPlayer />}
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/welcome" />
            )
          }
        />
        <Route
          path="/welcome"
          element={isAuthenticated ? <Welcome /> : <Navigate to="/" />}
        />
        <Route
          path="/forever"
          element={isAuthenticated ? <Forever /> : <Navigate to="/" />}
        />
        <Route
          path="/heart2heart"
          element={isAuthenticated ? <Heart2Heart /> : <Navigate to="/" />}
        />
        <Route
          path="/flowers"
          element={isAuthenticated ? <Flowers /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
