import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminSignup from "./components/AdminSignUp";

function App() {

  

  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
    </Routes>
  );
}

export default App;
