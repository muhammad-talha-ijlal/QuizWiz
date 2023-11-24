import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Authentication from "./Routes/Authentication/authentication.jsx";
import Home from "./Routes/Home/home.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="auth" element={<Authentication />}></Route>
    </Routes>
  );
}

export default App;
