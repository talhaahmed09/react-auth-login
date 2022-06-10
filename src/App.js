import Login from "./components/Login.jsx";
import { AppProvider } from "./components/context/AppContext.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/auth/ProtectedRoutes.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <Router>
    <AppProvider>
    <div className="app">
        <Routes>
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
  
    </div>
    </AppProvider>
    </Router>
  );
}

export default App;
