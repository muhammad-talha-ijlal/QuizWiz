import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Authentication from "./Routes/Authentication/authentication.jsx";
import Home from "./Routes/Home/home.jsx";
import Teacher from "./Routes/Teacher/teacher.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="auth" element={<Authentication />}></Route>
      <Route path="teacher" element={<Teacher />}></Route>
      <Route path="*" element={<h1>Not Found</h1>}></Route>
    </Routes>
  );
}

export default App;
