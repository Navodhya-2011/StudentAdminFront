import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminSignup from "./components/AdminSignUp";
import InsertNote from "./Pages/Insert";
import UpdateStudent from "./Pages/Update";
import StudentNote from "./Pages/StudentNote";

function App() {

  

  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/insert" element={<InsertNote />} />
      <Route path="/noteUpdate" element={<UpdateStudent />} />
      <Route path="/studentnote" element={<StudentNote />} />
    </Routes>
  );
}

export default App;
