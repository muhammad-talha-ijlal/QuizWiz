import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Authentication from "./Routes/Authentication/authentication.jsx";
import Home from "./Routes/Home/home.jsx";
import Teacher from "./Routes/Teacher/teacher.jsx";
import NavigationBar from "./Components/NavigationBar/navigationBar.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="teacher" element={<Teacher />}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
