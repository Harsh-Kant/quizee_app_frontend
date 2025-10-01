import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AuthTab from "./Components/AuthTab";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthTab />}>
          <Route index element={<SignUp />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
