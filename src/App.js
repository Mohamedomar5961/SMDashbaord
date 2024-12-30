import Login from "./Alt/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Alt/Dashboard";
import Signup from "./Alt/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
