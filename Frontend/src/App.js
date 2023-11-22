import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Authentication from "./Routes/Authentication/authentication.jsx";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Authentication />}></Route>
    </Routes>
  );
}

export default App;
