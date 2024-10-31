import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import LoginForm from "./pages/loginPage";
import Assets from "./pages/assetsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    const testUser = "username";
    const testPassword = "strongerPassword!";

    if (email === testUser && password === testPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect Username and Password");
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/assets"
          element={isLoggedIn ? <Assets /> : <Navigate to="/faro-investing" />}
        />
        <Route
          path="/faro-investing"
          element={
            isLoggedIn ? (
              <Navigate to="/assets" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
