import Login from "./components/Login.jsx";
import { AppProvider } from "./components/context/AppContext.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Login />
      </AppProvider>
    </div>
  );
}

export default App;
